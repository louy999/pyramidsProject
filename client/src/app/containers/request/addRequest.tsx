"use client";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

const AddRequest = () => {
  const [reqText, setReqText] = useState("");
  const [err, setErr] = useState("");
  const FetchAddReq = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (reqText !== "") {
      if (getCookie("id") !== undefined) {
        try {
          const res = await axios.post(`${process.env.LOCAL_API_URL}/req`, {
            user_id: getCookie("id"),
            req: reqText,
          });
          console.log(res.data);
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      } else {
        window.location.pathname = "/login";
      }
    } else {
      setErr("please write your request");
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };
  return (
    <>
      <form className="bg-color2 rounded-md p-4">
        <div className="w-full mb-4 rounded-lg bg-color2 ">
          <div className=" rounded-t-lg ">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <div className="text-red-500">{err}</div>
            <textarea
              id="comment"
              rows={3}
              className="w-full p-2 resize-none text-sm text-gray-900 bg-white focus:border-0 rounded-md"
              placeholder="Write a comment..."
              required
              onChange={(e) => setReqText(e.target.value)}
              value={reqText}
            ></textarea>
          </div>
          <div className="flex items-center justify-end px-3 py-2 border-t ">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-color1 rounded-lg focus:ring-4 focus:ring-blue-200  hover:p-4 hover:px-5 duration-300 shadow-md"
              onClick={FetchAddReq}
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRequest;
