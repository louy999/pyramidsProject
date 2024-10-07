import React from "react";
import Image from "next/image";
import backImg from "../../image/back.png";
const BackImg = () => {
  return (
    <div className=" w-full md:w-[90vw] lg:w-[60vw] md:h-[60vh] left-2/4 -translate-x-2/4  lg:h-[80vh] fixed -z-10 ">
      <Image
        src={backImg}
        alt=""
        width={800}
        height={800}
        className="w-full h-full"
      />
    </div>
  );
};

export default BackImg;
