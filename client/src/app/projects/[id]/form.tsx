import React from "react";

const FormRequest = () => {
  return (
    <div className="hidden md:block bg-color1 mt-2 p-3 rounded-md">
      <h2>contact us</h2>
      <div>
        <input type="text" placeholder="Your Name" />
      </div>
      <div>
        <input type="number" placeholder="Your Number" />
      </div>
      <div>
        <input type="textarea" placeholder="Message... " />
      </div>
    </div>
  );
};

export default FormRequest;
