import React, { useState } from "react";

const Input = ({
  placeholder,
  prefixIcon,
  suffixIcon,
  value,
  onChange,
  type = "text",
  name,
  isRequired = false,
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="bg-white border border-gray-500 py-2 pl-4 pr-2 rounded-full flex gap-3 items-center justify-between">
      <div className="flex gap-3 items-center flex-1">
        <img className="w-5 h-5" src={prefixIcon} alt="icon" />
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="outline-none w-full"
          placeholder={placeholder}
          required={isRequired}
        />
      </div>
      {suffixIcon && (
        <img
          className="w-5 h-5 cursor-pointer"
          src={suffixIcon}
          alt="icon"
          onClick={() => setshowPassword(!showPassword)}
        />
      )}
    </div>
  );
};

export default Input;
