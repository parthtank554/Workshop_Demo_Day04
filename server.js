const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./src/Routes/book.route");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/Demo")
.then(()=> {
    console.log("mongodb Connected");
})
.catch((err)=>{
    console.log("error",err);
});


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",bookRoute);

app.listen(3000, () =>{
    console.log("Server Started On 3000");
});