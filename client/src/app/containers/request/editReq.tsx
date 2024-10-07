"use client";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

interface EditReqProps {
  id: string | number;
  text: string;
}
const EditReq = (props: EditReqProps) => {
  const [show, setShow] = useState(false);
  const [reqText, setReqText] = useState(`${props.text}`);

  const editReqFetch = async () => {
    console.log(reqText);
    if (reqText !== "") {
      if (reqText !== "props.text") {
        try {
          const res = await axios.patch(`${process.env.LOCAL_API_URL}/req`, {
            id: props.id,
            req: reqText,
          });
          console.log(res.data);
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <>
      <div
        className="bg-color2 rounded-md text-white py-1 px-2 cursor-pointer capitalize"
        onClick={() => setShow((prev) => !prev)}
      >
        edit
      </div>
      {show ? (
        <div className="bg-color2 p-2 rounded-md absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-white flex justify-end flex-wrap gap-3">
          <div className="flex justify-between cursor-pointer items-center w-full">
            <h2>Edit Your Request</h2>
            <button onClick={() => setShow(false)}>
              <FaWindowClose className="text-color1 text-xl m-1" />
            </button>
          </div>
          <textarea
            id="comment"
            rows={3}
            className="w-full p-2 resize-none text-sm text-gray-900 bg-white focus:border-0 rounded-md"
            placeholder="Write a comment..."
            required
            onChange={(e) => setReqText(e.target.value)}
            value={reqText}
          ></textarea>
          <input
            type="button"
            value="edit"
            onClick={editReqFetch}
            className="bg-color1 rounded-md py-1 px-2 text-white capitalize text-end cursor-pointer"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EditReq;
