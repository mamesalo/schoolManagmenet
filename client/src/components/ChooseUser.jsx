import React from "react";
import { Link } from "react-router-dom";

const ChooseUser = () => {
  return (
    <div className="min-h-screen bg-blue-300 flex justify-around px-8 items-center">
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Student</p>
        <Link
          to="/student_login"
          className="text-white py-2 px-6 border border-orange-400 bg-orange-700 hover:bg-orange-500"
        >
          Login
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Teacher</p>
        <Link
          to="/teacher_login"
          className="text-white py-2 px-6 border border-orange-400 bg-orange-700 hover:bg-orange-500"
        >
          Login
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Admin</p>
        <Link
          to="/admin_login"
          className="text-white py-2 px-6 border border-orange-400 bg-orange-700 hover:bg-orange-500"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default ChooseUser;
