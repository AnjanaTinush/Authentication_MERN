import React ,{useState,useEffect} from 'react'
import '../Css/Loginscreen.css'
import { Link } from "react-router-dom";

const Loginscreen = ()  => {

  const[email , setemail]=useState('')
  const[password , setpassword]=useState('')

   
  function Login(){

    const user ={
     
      email,
      password,
      
    }
    console.log(user)
  }
 

  return (
    <div className='container'>
    <div className="header">
      <div className="text">Login</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
        <img src="" alt="" />
        <input type="email" placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
      </div>
      <div className="forgot-password">Lost password?<span>Click here</span></div>
      <div className="submit-container">
        
        <div className= "submit" onClick={Login}>Login</div>
      </div>
      <div className="newuser">New user ? <span><Link to={`/register`}>Sign up</Link></span></div>     
      </div>       
  </div>
  )
}

export default Loginscreen