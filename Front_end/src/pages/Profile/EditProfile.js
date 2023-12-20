import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import "./EditProfile.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const EditProfile = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const arrowStyle = { width: 40, height: 35, color: "#fff", marginLeft: -400 };
  const fullName = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  };

  return (
    <>
      <div className="editprofile-arrow">
        <NavLink to="/productupdate">
          <HiArrowSmallLeft style={arrowStyle} />
        </NavLink>
        <p className="edit-text-para">Edit Profile</p>
      </div>
      <div className="edit-content">
        <div className="add-picture">
          <span className="plus">+</span>
        </div>
        <div className="edit-form-container">
          <div className="edit-form">
            <div style={fullName}>
              <p className="text-edit">Full Name</p>
              <CustomInput
                value={displayName}
                placeholder="   adegoke Happy"
                className="input-style"
                onChange={() => setDisplayName()}
              />
            </div>
            <div style={fullName}>
              <p className="text-edit">Email</p>
              <CustomInput
                value={email}
                placeholder="  adegoke@gmail.com"
                className="input-style"
                onChange={() => setEmail()}
              />
            </div>
            <div style={fullName}>
              <p className="text-edit">Phone Number</p>
              <CustomInput
                value={password}
                type="password"
                placeholder="   08149706739"
                className="input-style"
                onChange={() => setPassword()}
              />
            </div>
          </div>
        </div>
        <div className="editleft-form">
          <div style={fullName}>
            <p className="text-edit">Bio</p>
            <CustomInput
              value={displayName}
              placeholder=" text"
              className="inputs-style"
              onChange={() => setDisplayName()}
            />
          </div>
          <CustomButton to="/ProfileUpdate" className="edit-button">
            Submit
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
