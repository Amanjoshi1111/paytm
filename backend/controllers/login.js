const { z } = require("zod");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../schemas/user.schema");
const { JWT_SECRET } = require("../config");

async function login(req,res){

    const {success} = loginValidator.safeParse(req.body);
    if(!success){
        return res.status(400).json({
            msg : "Invalid input."
        })
    }

    const user = await User.findOne({
        username: req.body.username
    })

    if(!user || !bcrypt.compareSync(req.body.password, user.password)){
        return res.status(400).json({
            msg : "Invalid credentials"
        })
    }
    
    const token = jwt.sign({userId : user._id}, JWT_SECRET);
    res.status(200).send({
        msg : "Login Successful.",
        token
    });
}

const loginValidator = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(1)
})

module.exports = {login};