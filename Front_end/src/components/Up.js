import React, { useState} from 'react';
import guy from "../assets/guy.png";
import CustomInput from './CustomInput';
import "./Up.css";
const Up = () => {
    const [newPassword, setNewPassword] = useState();
  
  return (
    <>
    <div className='colo'>
    <nav className="navbarr">
    <div className="search-pw-inputs">
    <CustomInput
      // placeholder=   "Search "
      type="name"
      value={newPassword}
      onChange={() => setNewPassword()}
      className="search-input" 
    />
    </div>
    <div className="editing-contents">
    
        <img src={guy} alt="guy" className='pictures'/>
        
    </div>
    <div className='column' ><p className='Dashboard-text' >Adegoke Happy</p>
     <p className='Dashboard-text-two'>adegokehappy1234@gmail.com</p></div>

  </nav> 

   </div>
  </>
  );
};

export default Up;