"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const fetchAuthLogin = async (e) => {
    e.preventDefault();
    console.log("s;");

    if (phone !== "") {
      if (password !== "") {
        try {
          const res = await axios.post(
            `${process.env.LOCAL_API_URL}/users/auth`,
            {
              phone,
              password,
            }
          );
          console.log(res.data);
        } catch (error) {
          setErr(error.response.data.message);
          setTimeout(() => {
            setErr("");
          }, 5000);
        }
      } else {
        setErr("Enter your password");
        setTimeout(() => {
          setErr("");
        }, 5000);
      }
    } else {
      setErr("Enter your phone");
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };

  return (
    <>
      <form className="bg-color2 w-11/12 md:w-4/12 absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 rounded-md  py-4 px-6">
        <div className="absolute left-0 top-0 bg-color3 text-red-500 rounded-md px-4 py-2">
          {err}
        </div>
        <div className="w-full text-center mb-3 text-2xl ">Login</div>
        <div className="">
          <div className="shadow-md mb-10 border-2 relative border-black py-4 px-2 rounded-md">
            <label
              htmlFor="phone"
              className="absolute bottom-14  bg-color2 px-1 text-xl"
            >
              phone
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              className="w-full py-1 px-2 rounded-md text-color2"
            />
          </div>
          <div className="shadow-md mb-3 border-2 relative border-black py-4 px-2 rounded-md">
            <label
              htmlFor="password"
              className="absolute bottom-14  bg-color2 px-1 text-xl"
            >
              password
            </label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full py-1 px-2 rounded-md text-color2"
            />
          </div>
          <div className="flex justify-between px-2 ">
            <Link
              href="/"
              className="cursor-pointer opacity-50 hover:opacity-100 hover:bg-color1 rounded-md duration-300 hover:text-color2 hover:px-2 hover:py-1"
            >
              Forget Password
            </Link>
            <Link
              href="/"
              className="cursor-pointer opacity-50 hover:opacity-100 hover:bg-color1 rounded-md duration-300 hover:text-color2 hover:px-2 hover:py-1"
            >
              Register
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <input
              type="button"
              value="Login"
              className="bg-color1 rounded-md px-4 py-2 text-color3 cursor-pointer hover:px-7 hover:py-3 duration-300"
              onClick={fetchAuthLogin}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
