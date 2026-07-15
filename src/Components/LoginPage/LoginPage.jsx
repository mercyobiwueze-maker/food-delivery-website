import { useState } from 'react'
import './LoginPage.css'
import { assets } from '../../assets/assets'

const LoginPage = ({setShowLogin}) => {

const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-page'>
<form className="login-page-container">
    <div className="login-page-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-pagee-inputs">
        {currState==="Login"?<></>: <input type="text" placeholder='your name' required />}
        <input type="email" placeholder='your email' required />
        <input type="password"  placeholder='password' required/>
    </div>
    <button>{currState==="sign up"?"create account":"Login"}</button>
    <div className="login-page-condition">
        <input type="checkbox" required/>
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
    </div>
    {currState=="Login"
    ?<p>create a new account? <span onClick={()=>setCurrState("sign up")}>  Click here</span></p>
    :<p>Already have an account? <span onClick={()=>setCurrState("Login")}> Login here</span></p>
    }
</form>
    </div>
  )
}

export default LoginPage