import React, { useState } from 'react';
import './Login.css'
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';



function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate=useNavigate()

const isValid = (email !== "") && (password !== "")


const postMethod =()=>{
console.log(email)
console.log(password)
navigate('/ShopNow')
}

const registerHandle =()=>{
  navigate("/Register")
}
  return (
  <>
    <Header />
  <div  className='login-container'>

 <div className='login-container-page'>
 <PersonIcon color="primary" fontSize="large"/>
 <h3> Login</h3>

    <TextField id="outlined-basic" label="Email Id" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email Id' required=''/>
  <br/>
    <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='Enter Your Password'/>
      <a href="/Register"> </a>
      <button className='login-button' onClick={postMethod} disabled={!isValid}>Submit</button>
      
  <p>Creat an Account <button onClick={registerHandle} >Register</button></p>
 </div>
      </div>
  </>
  );
}

export default Login;
