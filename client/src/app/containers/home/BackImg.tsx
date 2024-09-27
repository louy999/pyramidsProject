import React from "react";
import Image from "next/image";
import backImg from "../../../image/back.png";
const BackImg = () => {
  return (
    <div className="md:w-screen md:h-[100vh] fixed -z-10">
      <Image
        src={backImg}
        alt=""
        width={800}
        height={500}
        className="w-full h-full"
      />
    </div>
  );
};

export default BackImg;
