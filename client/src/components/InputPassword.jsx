import React, { useState } from "react";

const InputPassword = ({
  placeholder,
  prefixIcon,
  eyeOffIcon,
  eyeShowIcon,
  value,
  onChange,
  name,
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="bg-white border border-gray-500 py-2 pl-4 pr-2  rounded-full flex gap-3 items-center justify-between">
      <div className="flex gap-3 items-center flex-1">
        <img className="w-5 h-5" src={prefixIcon} alt="icon" />
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="outline-none"
          placeholder={placeholder}
          required
        />
      </div>
      <img
        className="w-5 h-5 cursor-pointer rounded-full hover:bg-gray-300"
        src={showPassword ? eyeShowIcon : eyeOffIcon}
        alt="icon"
        onClick={() => setshowPassword(!showPassword)}
      />
    </div>
  );
};

export default InputPassword;
