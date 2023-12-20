import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import "./Product.css";
import objects from "../../assets/objects.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const Product = () => {
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState("");
  const arrowStyle = { width: 40, height: 35, color: "#fff", marginLeft: -400 };


  return (
    <>
      <div className="product-arrow">
        <NavLink to="/phoneotp">
          <HiArrowSmallLeft style={arrowStyle} />
        </NavLink>
        <p className="product-arrow-para">Product Upload</p>
      </div>
        <div className="product-head">
            <img src={objects} alt="objects" style={{ width: 243, height: 50}}/>
            <p className="header-text">Enter product details</p>
        </div>

      <div className="input-1">
        <div className="input-1A">
          <p>Name</p>
          <CustomInput
            type="name"
            value={userName}
            onChange={() => setUserName()}
            className="inputstyle"
          />
        </div>
        <div className="input-1B">
          <p>Category</p>
          <CustomInput
            type="name"
            value={category}
            onChange={() => setCategory()}
            className="inputstyle"
          />
        </div>
      </div>
      <div className="input-1">
        <div className="input-1A">
          <p>Quantity</p>
          <CustomInput
            type="name"
            value={userName}
            onChange={() => setUserName()}
            className="inputstyle"
          />
        </div>
        <div className="input-1B">
          <p>Serial Number</p>
          <CustomInput
            type="name"
            value={category}
            onChange={() => setCategory()}
            className="inputstyle"
          />
        </div>
      </div>
      <div className="input-1">
        <div className="input-1A">
          <p>Version</p>
          <CustomInput
            type="name"
            value={userName}
            onChange={() => setUserName()}
            className="inputstyle"
          />
        </div>
        <div className="input-1B">
          <p>Model</p>
          <CustomInput
            type="name"
            value={category}
            onChange={() => setCategory()}
            className="inputstyle"
          />
        </div>
      </div>
      <div className="input-1">
        <div className="input-1A">
          <p>Shell Life</p>
          <CustomInput
            type="name"
            value={userName}
            onChange={() => setUserName()}
            className="inputstyle"
          />
        </div>
        <div className="input-1B">
          <p>Suppliers</p>
          <CustomInput
            type="name"
            value={category}
            onChange={() => setCategory()}
            className="inputstyle"
          />
        </div>
      </div><div className="input-1">
        <div className="input-1A">
          <p>Arrival Time</p>
          <CustomInput
            type="name"
            value={userName}
            onChange={() => setUserName()}
            className="inputstyle"
          />
        </div>
        <div className="input-1B">
          <p>Time Stamp</p>
          <CustomInput
            type="name"
            value={category}
            onChange={() => setCategory()}
            className="inputstyle"
          />
        </div>
      </div><div className="input-1">
        <div className="input-1A">
          <p>Picture</p>
          <CustomInput
            type="name"
            value={userName}
            onChange={() => setUserName()}
            className="inputstyle"
          />
        </div>
        <div className="input-1B">
          <p>Description</p>
          <CustomInput
            type="name"
            value={category}
            onChange={() => setCategory()}
            className="inputstyle"
          />
        </div>
        </div>
        <div className="updates-link">   
        <NavLink to="/" className="saves-link">
          Save
        </NavLink>
        <CustomButton to="/Productupdate" className="saves-btn">
          Submit
        </CustomButton>
      </div>
    </>
    
  );
};

export default Product;
