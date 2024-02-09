import React , {useState , useEffect} from 'react'
import axios from 'axios'
import '../Css/Signupscreen.css'


function Signupscreen() {

  const[name , setname]=useState('')
  const[email , setemail]=useState('')
  const[phone , setphone]=useState('')
  const[password , setpassword]=useState('')
  const[cpassword , setcpassward]=useState('')

  async function Register(){

    if(password==cpassword){

      const user ={
        name,
        email,
        phone,
        password,
        cpassword
      }
      
      try {
        
        const result = await axios.post('http://localhost:5000/api/users/register', user);
        console.log(result); 
      } catch (error) {
        console.log(error)
      }

    }else{
      alert("Password not match")
    }
  }

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
        <input type="email" placeholder='Username' value={name} onChange={(e)=>{setname(e.target.value)}}/>
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="email" placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="number" placeholder='Phone Number ' value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
      </div>

      <div className="input">
        <img src="" alt="" />
        <input type="password" placeholder='Comfirm Password' value={cpassword} onChange={(e)=>{setcpassward(e.target.value)}} />
      </div>

      <div className="submit-container">
        
        <div className= "submit" onClick={Register}>Sign up</div>
      </div>
          
      </div>       
  </div>
    </div>
  )
}

export default Signupscreen