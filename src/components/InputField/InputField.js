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
  tabIndex,
  onkeyup,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      value={value}
      maxLength={maxLength}
      tabIndex={tabIndex}
      onChange={onChange}
      onKeyUp={onkeyup}
    />
  );
};

export default InputField;
