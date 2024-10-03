import React from "react";
import LoginForm from "../containers/login/form";
import BackgroundLogin from "../containers/login/background";

const LoginPage = () => {
  return (
    <>
      <BackgroundLogin />
      <LoginForm />
    </>
  );
};

export default LoginPage;
