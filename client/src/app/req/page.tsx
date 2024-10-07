import React from "react";
import AddRequest from "../containers/request/addRequest";
import AllRequest from "../containers/request/allRequest";

const RequestPage = () => {
  return (
    <div className="w-11/12 lg:w-3/4  relative left-2/4 -translate-x-2/4 top-20  px-5 py-2 rounded-md">
      <AddRequest />
      <AllRequest />
    </div>
  );
};

export default RequestPage;
