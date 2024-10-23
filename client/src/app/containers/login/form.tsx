"use client";
import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchAuthLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
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
          setCookie("token", res.data.data.token);
          router.replace("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              setErr(error.response.data.message);
            } else {
              setErr("An unexpected error occurred.");
            }
          } else {
            setErr("An unexpected error occurred.");
          }
          setTimeout(() => {
            setErr("");
          }, 5000);
        } finally {
          setLoading(false);
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
              href="/register"
              className="cursor-pointer opacity-50 hover:opacity-100 hover:bg-color1 rounded-md duration-300 hover:text-color2 hover:px-2 hover:py-1"
            >
              Register
            </Link>
          </div>
          <div className="w-full flex justify-center">
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <input
                type="button"
                value="Login"
                className="bg-color1 rounded-md px-4 py-2 text-color3 cursor-pointer hover:px-7 hover:py-3 duration-300"
                onClick={fetchAuthLogin}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
