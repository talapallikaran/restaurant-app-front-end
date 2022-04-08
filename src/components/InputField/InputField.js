import React from "react";

const InputField = ({
  type,
  value,
  name,
  className,
  id,
  placeholder,
  onChange,
  maxLength,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className={className}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default InputField;
