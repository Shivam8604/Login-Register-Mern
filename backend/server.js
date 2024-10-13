const express = require("express");
const app = express();
const connectDB = require("./db/dbConnection");
const User = require("./db/user");
const cors = require('cors')

// Middleware for parsing Json

app.use(express.json());

// Enable cors

app.use(cors())

// Registration
app.post("/register",async(req,res)=>{
    try{
        const {username,password} = req.body;
        console.log(req.body);
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:"Registration Sucessfully"});
    }
    catch(error){
        res.status(500).json({error:"Registration failed"})
    }   
})

const port = 8200;

app.listen(port,()=>{
    console.log(`Server is listinig on port ${port}`)
})


// Login

app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:"Invalid username "})
        }
        if(user.password !== password){
            return res.status(401).json({error:"Invalid Password"})
        }
        res.status(200).json({message:"User Login Successfully"})
    }
    catch(error){
        res.status(500).json({error:"Login Failed"})
    }
})
