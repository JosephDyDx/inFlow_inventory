import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { BiEnvelope } from "react-icons/bi";
import "./ForgotPassword.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { NavLink } from "react-router-dom";
import Group from "../../assets/Group.png";

const Forgotpassword = () => {
  const arrowStyle = { width: 30, height: 25, color: "#000" };

  const [email, setEmail] = useState();

  return (
    <div className="forgotPwbody">
      <NavLink to="/" className="header">
        <HiArrowSmallLeft style={arrowStyle} />
        <p className="header-text">Forgot Password </p>
      </NavLink>
      <img src={Group} alt="worker" className="image"/>
      <p className="para">
        Don’t worry it happens, please provide the email <br/> associated with your
        account
      </p>
      <div className="container">
        <div className="wrapper">
          <BiEnvelope
            style={{
              width: 28,
              height: 23,
              color: "#020281",
              position: "absolute",
              left: 2,
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

        <div className="info">
          <p>Remember Your details?</p>
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
