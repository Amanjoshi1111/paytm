const { Router } = require("express");
const { getAccountBalance, transferData } = require("../controllers/account");
const authMiddleware = require("../middlewares/authMiddleware");
const asyncHandler = require("../asyncHandler");

const accountRoutes = Router();

accountRoutes.get("/balance",authMiddleware, asyncHandler(getAccountBalance));

accountRoutes.post("/transfer", authMiddleware, asyncHandler(transferData));

accountRoutes.route("/")
    .get((req,res, next)=> res.status(200).send("heee"));


module.exports = accountRoutes;