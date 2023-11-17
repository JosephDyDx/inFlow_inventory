import React, { useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import "./Product.css";
import objects from "../../assets/objects.png";
import CustomInput from "../../components/CustomInput";

const Product = () => {
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState("");
  const arrowStyle = { width: 40, height: 35, color: "#000", marginLeft: -400 };


  return (
    
    <div className="product-form">
      <div className="arrows">
        <NavLink to="/">
          <HiArrowSmallLeft style={arrowStyle} />
        </NavLink>
        <p className="arrows-para">Product update</p>
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
      </div><div className="input-1">
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
      </div><div className="input-1">
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
    </div>
  );
};

export default Product;
