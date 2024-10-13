import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

    const [loginData,setLoginData] = useState({
        username:"",
        password:""
    });

    const handleLoginSubmit= async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:8200/login",loginData);
            const {success,message} = response.data;
            if(success){
                console.log("Login Successfully")
            }
            else{
                console.log(message)
            }
        }
        catch(error){
            console.error("Login Error",error)
        }
        setLoginData({
            username:"",
            password:""
        })
    }


    const handleLoginChange = (e) =>{
        const {name,value} = e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value,
        }))
    }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLoginSubmit} >
        <input type='text' name='username' value={loginData.username} onChange={handleLoginChange} placeholder='Username' required />
        <input type='password' name='password' value={loginData.password} onChange={handleLoginChange} placeholder='Password' required />
        <button type='submit'>Submit</button>
        <p>Not registerd yet? <Link to="/register">Here</Link></p>
       </form>
    </div>
  )
}

export default Login
