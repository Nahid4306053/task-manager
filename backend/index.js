const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routers  = require("./src/routes/routes");
//  app set up 
const app = express();

// env setup 
dotenv.config()

// cors setup 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
})); 

// json  body parser 
app.use(express.json());
app.use(express.urlencoded({ extended:"utf8"}))

app.get("/", (req, res) => {
    res.send("You server is running");
})
// apis 
app.use("/tasks",routers)

// default erro handeler  
app.use((err, req, res, next) => {
    if (err.statusCode) {
        res.status(err.statusCode).send(err.message);
    } else {
        res.status(500).json({message: err.message ?? "There is server side error"});
    }
});

// server listen 
app.listen(5000, async() => {
      await mongoose.connect(process.env.MONGODBURI)
    console.log("server is running on port 5000")
})
