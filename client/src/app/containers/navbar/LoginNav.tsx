import React from "react";
import Link from "next/link";

const LoginNav = () => {
  return (
    <Link
      href="login"
      className="py-1 px-2 bg-color1 text-color2 rounded-md hover:p-2 hover:px-4 duration-300 active:p-1"
    >
      Login
    </Link>
  );
};

export default LoginNav;
