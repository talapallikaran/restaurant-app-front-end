import React from "react";

const CustomButton = ({ className, onClick, name, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {name}
    </button>
  );
};

export default CustomButton;
