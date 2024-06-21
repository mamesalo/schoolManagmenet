import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "src/components/Input";
import InputPassword from "src/components/InputPassword";
import {
  logininFormPassword as password,
  logininFormText as email,
} from "src/constant";

const SignIn = () => {
  const [e, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const user = useLoaderData();
  const nav = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.localeCompare("student") == 0) {
    } else if (user.localeCompare("teacer") == 0) {
    } else if (user.localeCompare("admin") == 0) {
      nav("/admin");
    }
  };
  return (
    <form
      className=" bg-white flex flex-col p-5 rounded gap-4 shadow "
      onSubmit={handleSubmit}
    >
      <Input
        type={email.type}
        value={e}
        onChange={onEmailChange}
        placeholder={email.placeholder}
        prefixIcon={email.prefixIcon}
        name={email.name}
        isRequired={email.isRequired}
      />
      <InputPassword
        value={pass}
        onChange={onPasswordChange}
        placeholder={password.placeholder}
        prefixIcon={password.prefixIcon}
        name={password.name}
        eyeOffIcon={password.eyeOffIcon}
        eyeShowIcon={password.eyeShowIcon}
      />

      <button className="py-2 px-3 bg-blue-700 rounded text-white font-bold hover:bg-blue-500">
        Login
      </button>
    </form>
  );
};

export default SignIn;
