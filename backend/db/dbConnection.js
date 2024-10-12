const mongoose = require("mongoose");
const connectDB =async ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/mydatabase")
        console.log("Connect to Data-Base")
    }catch(error){
        console.log(error)
    }
}
connectDB()

module.exports = connectDB;