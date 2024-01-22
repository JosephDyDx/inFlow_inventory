import React from "react";
import SignInCss from './Sign_in.module.css'
import { useState} from 'react';
// import group9 from '../assets/Group 9.png'
// import email from '../assets/email.png'
// import locked from '../assets/locked.png'
// import facebook_icon from '../assets/facebook_icon.png'
// import goggle_icon from '../assets/google_icon.png'
import { Link } from "react-router-dom";

const SignIn = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://192.168.43.113:5000/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
        } else {
          const errorData = await response.json();
          console.error('Error during sign-in:', errorData.message);
          // Handle error or set an error state if needed
        }
      } catch (error) {
        console.error('Error during sign-in:', error.message);
        // Handle unexpected errors or set an error state if needed
      }
    };
    
    return (
        <form onSubmit={handleSubmit} >
            {/* <div className= {SignInCss.bg} >
                <img src={group9} />
            </div> */}

            <div className={SignInCss.container}>

                <div className={SignInCss.header}>
                    <h1>Login</h1>
                    <p>Please enter your login details</p>
                </div>

                <div className={SignInCss.inputs}>
                    <div className={SignInCss.input}>
                        {/* <img className="" src={email} /> */}
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={SignInCss.input}>
                        {/* <img className="" src={locked} /> */}
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className={SignInCss.checkbx} >
                    <div> <input type="checkbox"/> </div>
                    <p>keep me logged in</p>
                    <Link to="/forgotpassword">Forgot Password</Link>
                </div>

                <button type="submit" className="btn btn-full submitbtn">Login</button>

                <div className={SignInCss.signup}>
                    <div>Don’t have an account yet? |<Link to="/sign_up" > Sign Up</Link></div>
                </div>

                <div className={SignInCss.child}>Or</div>

                <div className={SignInCss.socials}>
                    {/* <a href=""><img className={SignInCss.social_icons} src={goggle_icon} /></a> */}
                    {/* <a href=""><img className={SignInCss.social_icons} src={facebook_icon} /></a> */}
                </div>

            </div>
        </form>
    )
}

export default SignIn