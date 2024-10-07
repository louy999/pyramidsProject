import React from "react";
import Image from "next/image";
import backImg from "../../image/img.jpg";
const CalcPage = () => {
  return (
    <>
      <div className="w-full  flex justify-center items-center ">
        <Image
          src={backImg}
          alt="d"
          width={600}
          height={800}
          className="rounded-md"
        />
      </div>
      <div className="w-full  lg:w-3/4 mt-2 flex flex-wrap justify-center gap-2 md:gap-5">
        <div className="w-full flex gap-5">
          <select className="w-2/4 bg-black text-white rounded-md text-xl py-4 md:p-2 px-2">
            <option value="">project</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
          <select className="w-2/4 rounded-md text-xl py-4 md:p-2 px-2 bg-black text-white">
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
            <option value="">percentage</option>
            <option value="city">8</option>
            <option value="city">9</option>
            <option value="city">10</option>
          </select>
        </div>
        <div className="w-full flex gap-2 md:gap-5">
          <select className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md">
            <option value="">delivery date</option>
            <option value="city">8</option>
            <option value="city">9</option>
            <option value="city">10</option>
          </select>

          <select className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md">
            <option value="">floor</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
            <option value="city">city</option>
          </select>
          <select className="w-full text-xl py-4 md:p-2 px-2 bg-black text-white rounded-md">
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
            className="bg-black text-white capitalize px-4  py-2 rounded-md shadow-md cursor-pointer w-5/12 mt-3"
          />
        </div>
      </div>
    </>
  );
};

export default CalcPage;
