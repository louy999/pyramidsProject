"use client";
import axios from "axios";
interface DeleteReqProps {
  id: string | number;
}
const DeleteReq = ({ id }: DeleteReqProps) => {
  const deleteReqFetch = async () => {
    try {
      const res = await axios.delete(`${process.env.LOCAL_API_URL}/req/${id}`);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="bg-red-400  rounded-md text-white py-1 px-2 cursor-pointer capitalize"
      onClick={deleteReqFetch}
    >
      delete
    </div>
  );
};

export default DeleteReq;
