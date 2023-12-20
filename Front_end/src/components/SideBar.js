import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Sidebar.css";

import { RxDashboard, RxAvatar } from "react-icons/rx";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <img src={logo} alt="logo" className="side-img" />

        <div className="side-nav">
          <NavLink to="/" className="nav-1">
            <RxDashboard style={{ color: "#fff" }} />
            Dashboard
          </NavLink>
          <NavLink to="/" className="nav-1">
            <RxAvatar style={{ color: "#fff" }} />
            Profile
          </NavLink>
          <NavLink to="/" className="nav-1">
            <IoMdAddCircleOutline style={{ color: "#fff" }} />
            Add Product
          </NavLink>
          <NavLink to="/LogOutModal" className="nav-1">
            <IoIosLogOut style={{ color: "#fff" }} />
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
