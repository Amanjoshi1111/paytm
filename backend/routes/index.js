const { Router } = require("express");
const userRoutes = require("./user.routes");
const accountRoutes = require("./account.routes");
const asyncHandler = require("../asyncHandler");
const signUp = require("../controllers/signup");
const login = require("../controllers/login");

const routes = Router();

routes.post("/signup", asyncHandler(signUp));
routes.post("/login", asyncHandler(login));
routes.use("/user",userRoutes);
routes.use("/account", accountRoutes)

module.exports = routes