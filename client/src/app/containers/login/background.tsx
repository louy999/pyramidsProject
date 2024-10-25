import React from "react";
import backImg from "../../image/top-cover.jpg";
import backLogo from "../../image/Pyramids-Logo-Site-1-300x126.png";
import backLogoSec from "../../image/logoH-removebg-preview.png";

import Image from "next/image";

const BackgroundLogin = () => {
  return (
    <>
      <Image
        src={backLogo}
        alt=""
        width={300}
        height={300}
        className=" fixed top-12 md:top-5  -z-10 left-2/4 -translate-x-2/4 md:left-0 md:translate-x-0"
      />
      <Image
        src={backLogoSec}
        alt=""
        width={220}
        height={220}
        className=" fixed top-0 right-0 hidden md:block"
      />
      <div className="fixed w-screen -z-30  h-screen bottom-0">
        <div className="fixed w-screen h-screen bg-black opacity-70 top-0 left-0"></div>
        <Image
          src={backImg}
          alt=""
          width={800}
          height={500}
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default BackgroundLogin;
