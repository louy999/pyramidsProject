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
      <div className="md:w-2/4  mt-2 flex flex-wrap justify-center gap-2">
        <select className="w-full  bg-color2 text-xl py-4 md:p-2 px-2">
          <option value="city" disabled>
            project
          </option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
        </select>
        <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2">
          <option value="city" disabled>
            floor
          </option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
        </select>
        <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2">
          <option value="city" disabled>
            type
          </option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
        </select>
        <input type="number" name="" placeholder="unit space" id="" />
        <input type="number" name="" placeholder="down payment" id="" />
        <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2">
          <option value="city" disabled>
            payment
          </option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
        </select>
        <select className="w-full text-xl py-4 md:p-2 px-2 bg-color2">
          <option value="city" disabled>
            installment
          </option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
          <option value="city">city</option>
        </select>
      </div>
    </div>
  );
};

export default CalculatorPage;
