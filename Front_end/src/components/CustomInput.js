import React from "react";

const CustomInput = ({
  icon,
  placeholder,
  type,
  value,
  onChange,
  className,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        icon={icon}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
};

export default CustomInput;
