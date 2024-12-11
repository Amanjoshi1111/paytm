const { z } = require("zod");
const User = require("../schemas/user.schema");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function signUp(req, res) {

    const {success, msg} = signupValidator.safeParse(req.body);

    if(!success){
        return res.status(400).json({
            msg : "username already exist/ invalid inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username
    });

    if(user){
        return res.status(400).json({
            msg : "username already exist/ invalid inputs"
        })
    }

    const resp = await User.create(req.body);
    const token = jwt.sign({userId: resp._id}, JWT_SECRET);

    res.status(200).send({
        msg : "User Created Successfully",
        token
    });
}

//validation object 
const signupValidator = z.object({
    username: z.string().min(3).max(30),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(5).max(30),
    password: z.string().min(5)
})



module.exports = { signUp };