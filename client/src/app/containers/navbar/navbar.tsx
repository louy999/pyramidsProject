"use client";
import BarsNav from "./BarsNav";
import LoginNav from "./LoginNav";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 630) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full md:w-2/4 lg:w-fit flex justify-center items-center ${
        isHidden ? "fixed" : "relative"
      } md:top-10 left-2/4 -translate-x-2/4 gap-5 md:gap-10 shadow-md md:rounded-md bg-opacity-20 bg-white p-4 md:px-6`}
    >
      <div>
        <BarsNav />
      </div>
      <div>
        <LoginNav />
      </div>
    </div>
  );
};

export default Navbar;
