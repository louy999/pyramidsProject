import React from "react";
import TypeLink from "../home/TypeLink";
import CardOffer from "./CardOffer";
const Offers = () => {
  return (
    <div className="absolute top-[55%] md:top-3/4 w-full md:w-3/4 bg-color1 bg-opacity-30 md:bg-opacity-15  md:left-2/4 md:-translate-x-2/4 rounded-md py-4 px-2">
      <TypeLink />
      <div className="flex justify-center flex-wrap gap-5 p-5  ">
        <CardOffer />
        <CardOffer />
        <CardOffer />
        <CardOffer />
        <CardOffer />
      </div>
    </div>
  );
};

export default Offers;
