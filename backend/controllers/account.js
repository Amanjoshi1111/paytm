const { z } = require("zod");
const Account = require("../schemas/account.schema");
const { isValidObjectId } = require("mongoose");

async function getAccountBalance(req, res) {

    const userId = req.userId;
    const accountData = await Account.findOne({ userId });
    res.status(200).json({
        balance: accountData.balance
    })
}

async function transferData(req, res) {

    const userId = req.userId;
    const { success, error } = transferDataValidation.safeParse(req.body);
    if (!success) {
        res.status(400).json({
            msg: error
        })
        return;
    }

    if (req.userId == req.body.to) {
        res.status(400).json({
            msg: "Cannot send money to yourself."
        })
        return;
    }

    const senderAccountData = await Account.findOne({ userId });
    if (senderAccountData.balance < req.body.amount) {
        res.status(400).json({
            msg: "Insufficient balance"
        })
        return;
    }

    const recieverAccountData = await Account.findOne({ userId: req.body.to });
    if (!recieverAccountData) {
        res.status(400).json({
            msg: "Invalid user"
        })
        return;
    }

    const session = await Account.startSession();
    session.startTransaction();
    try {
        await Account.findOneAndUpdate({ userId }, { $inc: { balance: -req.body.amount } }, { session });
        await Account.findOneAndUpdate({ userId: req.body.to }, { $inc: { balance: req.body.amount } }, { session });

        await session.commitTransaction();
        res.status(200).json({
            msg : "Transaction successful"
        })
    } catch (err) {
        console.log(err.stack);
        await session.abortTransaction();
        res.status(400).json({
            msg : "Transaction failed"
        })
    }
    session.endSession();
}

const transferDataValidation = z.object({
    to: z.string().refine((str) => isValidObjectId(str), {
        message: "Invalid ObjectId"
    }),
    amount: z.number().gt(0, {message: "Amount is less than 1"})
})

module.exports = { getAccountBalance, transferData};