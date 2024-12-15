const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function authMiddleware(req, res, next) {
    
    const headers = req.headers;
    if(!headers['authorization']){
        res.status(403).json({
            msg : "Invalid authorization token"
        })
        return;
    }

    const token = headers['authorization'].split(' ')[1];
    try{
    const data = jwt.verify(token, JWT_SECRET); 
    req.userId = data.userId;
    next();
    }catch(err){
        res.status(403).json({
            msg : "Invalid authorization token 2"
        })
        return;
    }
}

module.exports = authMiddleware;