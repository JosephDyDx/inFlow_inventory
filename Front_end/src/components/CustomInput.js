import React from "react";

const CustomInput = ({ placeholder, type, value, onChange, className }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default CustomInput;
