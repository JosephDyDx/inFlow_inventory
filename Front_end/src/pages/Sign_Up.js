import React from "react";
import SignUpCss from './Sign_Up.module.css'
import { Link } from "react-router-dom";
import phone from '../assets/android-call.png'
import facebook_icon from '../assets/facebook_icon.png'
import goggle_icon from '../assets/google_icon.png'
import email from '../assets/email.png'
import group10 from '../assets/Group 10.png'
import locked from '../assets/locked.png'
import person from '../assets/android-contact.png'

function Sign_Up () {
    return (
        
        <div className="">
            <div className={SignUpCss.bg}>
                <img src={group10} />
            </div>

            <div className= {SignUpCss.container}>
                <div className={SignUpCss.head}>Sign Up</div>
                <p>Please register to create an account</p>

                <div className={SignUpCss.inputs}>
                    <div className={SignUpCss.input}>
                    <img className="" src={person} />
                        <input type="text" placeholder="Fullname" />
                    </div>
                    <div className={SignUpCss.input}>
                        <img className="" src={email} />
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className={SignUpCss.input}>
                        <img className="" src={phone} />    
                        <input type="text" placeholder="Phone Number"/>
                    </div>
                    <div className={SignUpCss.input}>
                        <img className="" src={locked} />
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className={SignUpCss.input}>
                        <img className="" src={locked} />
                        <input type="password" placeholder="Confirm Password"/>
                    </div>

                    <Link to="/" className=" btn btn-full submitbtn">Sign Up!</Link>

                    <div className={SignUpCss.child}>Or</div>

                    <div className={SignUpCss.socials}>
                        <a href=""><img className={SignUpCss.social_icons} src={goggle_icon} /></a>
                        <a href=""><img className={SignUpCss.social_icons} src={facebook_icon} /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sign_Up