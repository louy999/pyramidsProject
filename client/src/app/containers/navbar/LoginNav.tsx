"use client";
import Link from "next/link";
import { getCookie } from "cookies-next";

// import { cookies } from "next/headers";
import { useEffect, useState } from "react";

const LoginNav = () => {
  const [show, setShow] = useState(false);
  // const theme = cookieStore.get("token") === undefined;
  const theme = getCookie("token") === undefined;

  useEffect(() => {
    setShow(theme);
  }, [theme]);
  return (
    <>
      {show ? (
        <Link
          href="login"
          className="py-1 px-2 bg-color1 text-color2 rounded-md hover:p-2 hover:px-4 duration-300 active:p-1"
        >
          Login
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginNav;
