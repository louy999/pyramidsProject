/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

const DownPaymentProject = (props: any) => {
  const priceMeter = props?.find?.price_meter || 0;
  const meterStart = props?.find?.meter_start || 0;
  const typeIndex = props?.find?.type?.indexOf(props.projectType);

  // Ensure priceMeter and meterStart are valid numbers before doing calculations
  const minDownPayment =
    priceMeter && meterStart && typeIndex !== -1
      ? (Number(priceMeter[typeIndex]) * Number(meterStart[typeIndex]) * 20) /
        100
      : 0; // Fallback value if something is undefined

  const formattedDownPayment = minDownPayment.toLocaleString();

  // State to manage the down payment value and error
  const [downPayment, setDownPayment] = useState<number>(0); // Changed to number
  const [errorMeter, setErrorMeter] = useState("");
  const [unitSpace, setUnitSpace] = useState<number>(0); // Changed to number
  const [error, setError] = useState("");

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDownPayment(value);

    // Check if the entered value is less than minDownPayment
    if (value < minDownPayment) {
      setErrorMeter(`text-red-500`);
    } else {
      setErrorMeter("text-slate-400"); // Clear the error if the value is valid
    }
    if (value < Number(meterStart[typeIndex])) {
      setError(`text-red-500`);
    } else {
      setError("text-slate-400"); // Clear the error if the value is valid
    }
  };

  const handleUnitSpaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUnitSpace(value);

    if (value < Number(meterStart[typeIndex])) {
      setError(`text-red-500`);
    } else {
      setError("text-slate-400"); // Clear the error if the value is valid
    }
  };

  useEffect(() => {
    props.downPayment(downPayment);
    props.unitSpace(unitSpace);
  }, [downPayment, props, unitSpace]);

  return (
    <div className="w-full flex gap-2 md:gap-5 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-2/5 flex flex-wrap">
        <input
          type="number"
          name=""
          placeholder="Down Payment"
          className="w-full p-2 text-black rounded-md"
          id=""
          value={downPayment}
          onChange={handleDownPaymentChange}
        />
        <label className={`${errorMeter}`}>
          min~{formattedDownPayment || "N/A"}
        </label>
      </div>
      <select
        className="w-full md:w-1/5 p-2 text-black rounded-md text-[13px] h-10"
        value={props.percentage}
        onChange={(e) => props.sPercentage(e.target.value)}
      >
        <option value="">percentage</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
        <option value="40">40%</option>
        <option value="50">50%</option>
      </select>
      <div className="w-full md:w-2/5">
        <input
          type="number"
          name=""
          value={unitSpace}
          onChange={handleUnitSpaceChange}
          placeholder="Unit Space"
          className="w-full p-2 text-black rounded-md"
          id=""
        />
        <label className={`${error}`}>min~{meterStart[typeIndex]}m</label>
      </div>
    </div>
  );
};

export default DownPaymentProject;
