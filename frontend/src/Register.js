import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Register = () => {

    const [registerData,setRegisterData] = useState({
        username:"",
        password:""
    })

    const handleRegisterChange= (e)=>{
        const {name,value} = e.target;
        setRegisterData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleRegisterSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8200/register',registerData);
            console.log(response.data);
        }
        catch(error){
            console.log(error)
        }
        setRegisterData({
            username:"",
            password:""
        })
    }


  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleRegisterSubmit}>
        <input type='text' name='username' value={registerData.username} placeholder='Enter Your User Name' onChange={handleRegisterChange} required/>
        <input type='password' name='password' value={registerData.password} placeholder='Enter Your User Password' onChange={handleRegisterChange} required/>
        <button type='submit'>Register</button>
        <p>Already Registerd
        <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
