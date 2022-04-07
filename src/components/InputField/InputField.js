import React from "react";

const InputField = ({
  type,
  value,
  name,
  className,
  id,
  placeholder,
  onChange,
}) => (
  <input
    type={type}
    value={value}
    name={name}
    className={className}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputField;
