const { Router } = require("express");
const asyncHandler = require("../asyncHandler");
const { signUp } = require("../controllers/signup");
const { login } = require("../controllers/login");
const authMiddleware = require("../middlewares/authMiddleware");
const { updateUser } = require("../controllers/user");

const userRoutes = Router();

userRoutes
    .get(asyncHandler(authMiddleware), (req, res) => {
        console.log("Hello world");
        res.status(200).json({
            msg: "OK REPORT"
        })
    })
    .put(asyncHandler(authMiddleware), asyncHandler(updateUser));



module.exports = userRoutes;