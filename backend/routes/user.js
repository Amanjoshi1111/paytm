const { Router } = require("express");
const asyncHandler = require("../asyncHandler");
const { signUp } = require("../controllers/signup");
const { login } = require("../controllers/login");

const userRoutes = Router();

userRoutes.get("/user", (req, res)=> {
    console.log("Hello world");
    res.status(200).json({
        msg : "OK REPORT"
    })
});

userRoutes.post("/signup", asyncHandler(signUp));
userRoutes.post("/login", asyncHandler(login));

module.exports = userRoutes;