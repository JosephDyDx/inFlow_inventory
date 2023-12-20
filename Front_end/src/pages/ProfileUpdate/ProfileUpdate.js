import React from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import "./ProfileUpdate.css";
import CustomButton from "../../components/CustomButton";
import guy from "../../assets/guy.png";

const ProfileUpdate = () => {
  const arrowStyle = { width: 40, height: 35, color: "#fff", marginLeft: -400 };
  // const fullName = {display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 10}
  return (
    <>
      <div className="profile-edit-body">
        <div className="profile-edit-arrow">
          <NavLink to="/productupdate">
            <HiArrowSmallLeft style={arrowStyle} />
          </NavLink>
          <p className="profile-edit-text-para"> Profile</p>
        </div>
        <div className="edits-content">
          <div className="adds-picture">
            <img src={guy} alt="guy" />
          </div>
          <div className="profile-edit-form-container">
            <p className="username"> adegoke Happy</p>
            <p> adegoke@gmail.com</p>
            <p className="phonenumber"> 08149706739</p>
            <p className="profile-bio">
              A network Admin at CRC who specializes in managing CRC
              Networks,and also a Software Engineer who specializes in creating
              & developing Apps and Websites that have friendly user interfaces.
            </p>
            <CustomButton to="/Product" className="profile-edit-button">
        Ok
      </CustomButton>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default ProfileUpdate;
