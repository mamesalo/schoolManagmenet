import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/logo.png";
const SideBar = ({ links }) => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <div className="w-64 bg-blue-900 p-6 max-h-screen overflow-auto">
      <div className="flex items-center justify-center my-5">
        <img className="w-11 h-11" src={logo} alt="logo" />
      </div>
      <div>
        {links.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`flex items-center gap-2 py-2 px-3 hover:bg-blue-500 rounded transition-all mb-2 ${
              item.to.localeCompare(selected) == 0 && `bg-blue-500`
            }`}
            onClick={() => setSelected(item.to)}
          >
            <img src={item.icon} alt="icon" className="w-6 h-6" />
            <p className="text-white font-semibold">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
