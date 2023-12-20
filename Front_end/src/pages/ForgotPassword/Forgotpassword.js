import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { BiEnvelope } from "react-icons/bi";
import "./ForgotPassword.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { NavLink } from "react-router-dom";
import Group from "../../assets/Group.png";

const Forgotpassword = () => {
  const arrowStyle = { width: 40, height: 35, color: "#000" };

  const [email, setEmail] = useState();

  return (
    <div className="forgotPwbody">
      {/* <div className="arrow">
        <NavLink to="/">
          <HiArrowSmallLeft style={arrowStyle} />
        </NavLink>
        <p className="header-text">Forgot Password </p>
      </div> */}
      <div className="forgot-header">
        <NavLink to="/">
          <HiArrowSmallLeft style={arrowStyle} />
        </NavLink>
        <p className="forgot-header-text">Forgot Password</p>
      </div>
      <img src={Group} alt="worker" className="image" />
      <p className="forgot-para">
        Don’t worry it happens, please provide the email associated with your
        account
      </p>
      <div className="forgot-container">
        <div>
          <BiEnvelope
            style={{
              width: 28,
              height: 23,
              color: "#020281",
              position: "absolute",
              left: 250,
              top: 385
            }}
          />
          <CustomInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={() => setEmail()}
            className="input"
          />
        </div>
        <CustomButton to="/passwordreset" className="cont-button">
          Continue
        </CustomButton>

        <div className="forgot-info">
          <NavLink to="/forgotpassword" className="forgot-info-text">Remember Your details?</NavLink>
          <NavLink to="/" className="forgot-info-link">Sign in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
