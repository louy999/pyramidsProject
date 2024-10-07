import React from "react";
import CalcPage from "../containers/calculator/CalcPage";

const CalculatorPage = () => {
  return (
    <div className="absolute w-full md:w-3/4 lg:w-2/4 bg-color2  top-24 md:top-44  left-2/4 p-5 rounded-md -translate-x-2/4 flex justify-center flex-wrap">
      <CalcPage />
    </div>
  );
};

export default CalculatorPage;
