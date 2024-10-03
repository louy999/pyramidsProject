import React from "react";
import Image from "next/image";
import backImg from "../image/back.png";
const CalculatorPage = () => {
  return (
    <div className="absolute w-full md:w-2/4 bg-color1  top-24 md:top-40 left-2/4 p-5 rounded-md -translate-x-2/4 flex justify-center flex-wrap">
      <div className="w-full  flex justify-center items-center ">
        <Image
          src={backImg}
          alt="d"
          width={300}
          height={400}
          className="rounded-md"
        />
      </div>
      <div className="md:w-2/4  mt-2 flex flex-wrap justify-center gap-2 md:gap-5">
        <div className="w-full flex gap-5">
          <select className="w-2/4 bg-color2 rounded-md text-xl py-4 md:p-2 px-2">
            <option value="">project</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
          <select className="w-2/4 rounded-md text-xl py-4 md:p-2 px-2 bg-color2">
            <option value="">type unit</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
        </div>
        <div className="w-full flex gap-2 md:gap-5">
          <input
            type="number"
            name=""
            placeholder="Down Payment"
            className="w-2/4 p-2 text-black rounded-md"
            id=""
          />
          <select className="w-2/4 p-2 text-black rounded-md text-[13px]">
            <option value="">instalment</option>
            <option value="city">8</option>
            <option value="city">9</option>
            <option value="city">10</option>
          </select>
        </div>
        <div className="w-full flex gap-2 md:gap-5">
          <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2 rounded-md">
            <option value="">instalment</option>
            <option value="city">8</option>
            <option value="city">9</option>
            <option value="city">10</option>
          </select>

          <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2 rounded-md">
            <option value="">payment</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
          <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2 rounded-md">
            <option value="">installment</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
        </div>
        <div className="flex justify-center w-full">
          <input
            type="button"
            value="calc"
            className="bg-color2 text-white capitalize px-4  py-2 rounded-md shadow-md cursor-pointer w-5/12 mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
