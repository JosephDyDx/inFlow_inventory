import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
        </nav>

    )
}

export default Navbar