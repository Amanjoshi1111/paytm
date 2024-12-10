const { default: mongoose, mongo } = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/paytm');
        console.log("Connected to database");
    }catch(err){
        console.log("Error while connecting to database");
    }
}

module.exports = {connectDB};