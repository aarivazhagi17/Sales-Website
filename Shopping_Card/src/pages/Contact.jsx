import React, { useEffect, useState } from 'react'
import './Contact.css'
import User_icon from '../assets/LoginLogo/User_icon.png'
import Email_icon from '../assets/LoginLogo/Email_icon.png'
import Password_icon from '../assets/LoginLogo/Password_icon.png'
function Contact() {
  const[action, setAction]=useState("Login");

  return (
    <div className='Bg'>
     <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
              {action==="Login"?<div></div>:<div className="input">
                    <img src={User_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                
                <div className="input">
                    <img src={Email_icon} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={Password_icon} alt="" />
                    <input type="password" text="password" placeholder='Password' />
                </div>
                </div>
                {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password ? <span>Click Here!</span></div>}
                
                <div className="submit-container">
                  <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                  <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
    </div>
    
  )
}

export default Contact