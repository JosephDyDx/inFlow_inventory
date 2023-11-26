import React from "react";
import SignInCss from './Sign_in.module.css'
import group9 from '../assets/Group 9.png'
import email from '../assets/email.png'
import locked from '../assets/locked.png'
import facebook_icon from '../assets/facebook_icon.png'
import goggle_icon from '../assets/google_icon.png'
import { Link } from "react-router-dom";

function Sign_In () {
    return (
        
        <form>
            <div className= {SignInCss.bg} >
                <img src={group9} />
            </div>

            <div className={SignInCss.container}>

                <div className={SignInCss.header}>
                    <h1>Login</h1>
                    <p>Please enter your login details</p>
                </div>

                <div className={SignInCss.inputs}>
                    <div className={SignInCss.input}>
                        <img className="" src={email} />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className={SignInCss.input}>
                        <img className="" src={locked} />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>

                <div className={SignInCss.checkbx} >
                    <div> <input type="checkbox"/> </div>
                    <p>keep me logged in</p>
                    <Link to="/forgotpassword">Forgot Password</Link>
                </div>

                <Link to="/" className="btn btn-full submitbtn">Login</Link>

                <div className={SignInCss.signup}>
                    <div>Don’t have an account yet? |<Link to="/sign_up" > Sign Up</Link></div>
                </div>

                <div className={SignInCss.child}>Or</div>

                <div className={SignInCss.socials}>
                    <a href=""><img className={SignInCss.social_icons} src={goggle_icon} /></a>
                    <a href=""><img className={SignInCss.social_icons} src={facebook_icon} /></a>
                </div>

            </div>
        </form>
    )
}

export default Sign_In