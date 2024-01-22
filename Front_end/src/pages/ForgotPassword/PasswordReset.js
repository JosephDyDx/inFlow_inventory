import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import "./PasswordReset.css";
import CustomButton from "../../components/CustomButton";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const arrowStyle = { width: 40, height: 35, color: "#000", marginRight: 800, marginButtom: 100};
  return (
    <div className="newPwBody">
      <NavLink to="/">
        <HiArrowSmallLeft style={arrowStyle} />
      </NavLink>

      <p className="reset-title">Password Reset</p>
      <p className="reset-header-text">
        Your new password should be different from the old password
      </p>

      <div className="reset-pw-input">
        <CustomInput
          placeholder="new password"
          type="password"
          value={newPassword}
          onChange={() => setNewPassword()}
          className="password-input"
        />
        <CustomInput
          type="password"
          placeholder="confirm Password"
          value={confirmPassword}
          onChange={() => setConfirmPassword()}
          className="password-input"
        />
        <CustomButton to="/phoneotp" className="save-button">
          Save New Password
        </CustomButton>
      </div>

      <NavLink to="/Dashboard" className="signin">
        Sign in
      </NavLink>
    </div>
  );
};

export default PasswordReset;
