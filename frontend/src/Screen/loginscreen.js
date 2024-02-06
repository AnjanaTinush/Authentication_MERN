import React from 'react'
import '../Css/Loginscreen.css'
import { Link } from "react-router-dom";

const Loginscreen = ()  => {
   
  
 

  return (
    <div className='container'>
    <div className="header">
      <div className="text">Login</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
        <img src="" alt="" />
        <input type="email" placeholder='Email' />
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Password' />
      </div>
      <div className="forgot-password">Lost password?<span>Click here</span></div>
      <div className="submit-container">
        
        <div className= "submit">Login</div>
      </div>
      <div className="newuser">New user ? <span><Link to={`/register`}>Sign up</Link></span></div>     
      </div>       
  </div>
  )
}

export default Loginscreen