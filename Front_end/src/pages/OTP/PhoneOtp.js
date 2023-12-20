import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import "./Otp.css";
import CustomButton from "../../components/CustomButton";
import OTPInput from "react-otp-input";

const PhoneOtp = () => {
  const [otp, setOtp] = useState("");
  const arrowStyle = { width: 40, height: 35, color: "#000", marginLeft: -400 };

  console.log(otp);
  return (
    <div className="otp-body">
      <div className="arrow">
        <NavLink to="/passwordreset">
          <HiArrowSmallLeft style={arrowStyle} />
        </NavLink>
        <p className="arrow-para">OTP Verification</p>
      </div>
      <p className="otp-para">
        5 digit code has been sent to your Email Address: email@gmail.com
      </p>

      <div className="otp-box">
        <OTPInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={5}
          renderSeparator={
            <span
              style={{
                width: "10px",
              }}
            ></span>
          }
          inputType="tel"
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: 46,
            height: 62,
            border: "1px solid #c7c6c6",
            borderRadius: 15,
            color: "#000"
          }}
        />
        <NavLink to="/" className="otp-text">Resend Code</NavLink>
      </div>
      <CustomButton to="/EditProfile" className="phone-button">
        Continue
      </CustomButton>
    </div>
  );
};

export default PhoneOtp;
