const { Router } = require("express");
const userRoutes = require("./user");

const routes = Router();

routes.use("/api/v1",userRoutes);

module.exports = routes