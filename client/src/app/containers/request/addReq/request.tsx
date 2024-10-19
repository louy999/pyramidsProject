"use client";
import { useState } from "react";
import axios from "axios";

const AddRequest = ({ user }) => {
  const [textReq, setTextReq] = useState("");

  const addRequestFetch = async (e) => {
    e.preventDefault();
    if (user !== null) {
      const res = await axios.post(`${process.env.LOCAL_API_URL}/req`, {
        user_id: user.id,
        req: textReq,
      });
      window.location.reload();
      console.log(res.data.data);
    } else {
      window.location.pathname = "/login";
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
            <textarea
              id="comment"
              rows={3}
              className="w-full p-2 resize-none text-sm text-gray-900 bg-white focus:border-0 rounded-md"
              placeholder="Write a comment..."
              onChange={(e) => setTextReq(e.target.value)}
              value={textReq}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-end px-3 py-2 border-t ">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-color1 rounded-lg focus:ring-4 focus:ring-blue-200  hover:p-4 hover:px-5 duration-300 shadow-md"
              onClick={addRequestFetch}
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
