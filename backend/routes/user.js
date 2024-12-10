const { Router } = require("express");

const userRoutes = Router();

userRoutes.get("/user", (req, res)=> {
    console.log("Hello world");
    res.status(200).json({
        msg : "OK REPORT"
    })
});

module.exports = userRoutes;