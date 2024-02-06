import React from 'react'
import './css/loginscreen.css'

function loginscreen() {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="email" />
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="password" />
        </div>
        <div className="forgot-password">Lost password?<span>Click here</span></div>
        <div className="submitcontainer">
          <div className="submit">Sing up</div>
          <div className="submit">Login</div>
        </div>
        </div>       
    </div>
  )
}

export default loginscreen