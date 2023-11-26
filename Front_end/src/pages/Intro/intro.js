import React from "react";
import './intro.css';
import bg from '../../assets/Component 3.png'
import { Link } from "react-router-dom";


const Intro = () => {
    return(
        <section id="intro">

            <div className="introContent">
                <span className="introText">Welcome to <span className="introName">Inventory and Stock Management</span> <br/> Information System!</span >
                <p className="introPara">This product helps you manage your inventory easily.</p>

                <div className="float-container">
                   <Link to="/sign_up" className="btn btn-full">Sign Up!</Link>
                   <Link to="/sign_in" className="btn btn-ghost">Sign In!</Link> 
                </div>
                
            </div>

            <img src={bg} alt="Main Pic" className="bg" />
 
        </section>
    )
}

export default Intro;