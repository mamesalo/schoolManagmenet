import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { homeHeaderSignIn, homeNav, loginChooseUser } from "src/constant";
import logo from "src/assets/logo.png";
const LoginIn = () => {
  const [selected, setselected] = useState("Student");
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      <header className="bg-white shadow-lg p-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-8 h-8" />
        </Link>
        <div className="flex gap-3">
          {homeNav.map((item, index) => (
            <button
              key={index}
              className="text-base font-semibold border-2 border-transparent hover:border-b-blue-800 border-red-300 px-2"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="items-center flex gap-4">
          {homeHeaderSignIn.map((item, index) => (
            <Link
              key={index}
              to={item.toPage}
              className={`font-semibold py-2 px-3 rounded ${
                item.label.includes("Sign") &&
                `shadow-lg bg-blue-700 text-white`
              } hover:shadow-lg hover:bg-blue-700 hover:text-white`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <div className="flex flex-col items-center">
        <div className="bg-blue-50 w-fit p-5 flex gap-5 rounded shadow mt-8">
          {loginChooseUser.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center ga-2 px-8 py-11 ${
                selected.localeCompare(item.label) == 0 &&
                `bg-white rounded-tl-xl rounded-tr-xl shadow-lg font-semibold`
              } `}
              onClick={() => setselected(item.label)}
            >
              <p className="text-2xl">{item.label}</p>
              <img className="w-9 h-9" src={item.icon} alt="icon" />
            </Link>
          ))}
        </div>
        <div className="mt-8 bg-yellow-400">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LoginIn;
