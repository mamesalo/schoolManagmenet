import React, { useState } from "react";

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col gap-3 justify-center items-center ">
      <p className="text-lg font-semibold">Teacher Sign In</p>
      <form
        className="flex flex-col p-5 bg-gray-100 gap-4 "
        onSubmit={handleSubmit}
      >
        <input
          className="py-2 px-4 rounded"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="py-2 px-4 rounded"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="py-2 px-3 bg-orange-500 rounded text-white font-bold hover:bg-orange-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default TeacherSignIn;
