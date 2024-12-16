const { z } = require("zod");
const User = require("../schemas/user.schema");
const { json } = require("express");

async function updateUser(req, res, next) {
    const { success, error} = udpateUserValidator.safeParse(req.body);
    if (!success) {
        console.log(success, error)
        res.status(411).json({
            msg : error
        })
        return;
    }

    const resp = await User.findByIdAndUpdate(req.userId, req.body);
    res.status(200).json({
        msg : "Profile updated successfully"
    })
}

const udpateUserValidator = z.object({
    firstName: z.string().min(3).max(30).optional(),
    lastName: z.string().min(5).max(30).optional(),
    password: z.string().min(5).optional()
}).refine((obj) => Object.values(obj).some((data)=> data!= undefined),
    { message : "At least one field must be entered"}
)

async function getAllUsers(req, res){
    const users = (await User.find({}, {password:0}));
    return res.status(200).json({
        users 
    })
}

module.exports = {updateUser, getAllUsers};