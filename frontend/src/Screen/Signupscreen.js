import React from 'react'
import '../Css/Signupscreen.css'

function Signupscreen() {
  return (
    <div>
         <div className='container'>
    <div className="header">
      <div className="text">Sign up</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">

    <div className="input">
        <img src="" alt="" />
        <input type="email" placeholder='Username' />
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="email" placeholder='Email' />
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Phone Number ' />
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Password' />
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Comfirm Password' />
      </div>

      <div className="submit-container">
        
        <div className= "submit">Sign up</div>
      </div>
          
      </div>       
  </div>
    </div>
  )
}

export default Signupscreen