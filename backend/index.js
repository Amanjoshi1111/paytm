const express = require("express");
const { connectDB } = require("./db");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = 3000;

// app.use((req, res, next)=> {
//     console.log(req.path);
//     next();
// })

app.use(cors());
app.use(express.json());
app.use(routes);

connectDB().then(()=>{
    app.listen(PORT, ()=> {
        console.log("CONNECTED TO PORT : ", PORT);
    })
})
