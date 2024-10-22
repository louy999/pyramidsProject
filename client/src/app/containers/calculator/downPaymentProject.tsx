/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

const DownPaymentProject = (props: any) => {
  const priceMeter = props?.find?.price_meter || [];
  const meterStart = props?.find?.meter_start || [];
  const percentageOptions = props?.find?.percentage || [];
  const percentageDown =
    props.percentage === 0 && percentageOptions.length > 0
      ? percentageOptions[0]
      : props.percentage;
  const typeIndex = props?.find?.type?.indexOf(props.projectType);

  const minDownPayment =
    priceMeter && meterStart && typeIndex !== -1
      ? (Number(priceMeter[typeIndex]) *
          Number(meterStart[typeIndex]) *
          Number(percentageDown)) /
        100
      : 0;

  const formattedDownPayment = minDownPayment.toLocaleString();

  const [downPayment, setDownPayment] = useState<string>(""); // Store value as string
  const [errorMeter, setErrorMeter] = useState("");
  const [unitSpace, setUnitSpace] = useState<number>(); // Keep unitSpace as number
  const [error, setError] = useState("");

  // Handle formatting and updating state
  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Remove commas and convert to a number
    const numericValue = Number(value.replace(/,/g, ""));

    // Format the numeric value with commas
    const formattedValue = numericValue.toLocaleString();

    setDownPayment(formattedValue);

    // Check if the entered value is less than minDownPayment
    if (numericValue < minDownPayment) {
      setErrorMeter(`text-red-500`);
    } else {
      setErrorMeter("text-slate-400");
    }
  };

  const handleUnitSpaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUnitSpace(value);

    if (value < Number(meterStart[typeIndex])) {
      setError(`text-red-500`);
    } else {
      setError("text-slate-400");
    }
  };

  useEffect(() => {
    // Convert back to number when passing to parent
    props.downPayment(Number(downPayment.replace(/,/g, "")));
    props.unitSpace(unitSpace);
  }, [downPayment, props, unitSpace]);

  return (
    <div className="w-full flex gap-2 md:gap-5 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-2/5 flex flex-wrap">
        <input
          type="text" // Changed to text to display commas
          name=""
          placeholder="Down Payment"
          className="w-full p-2 text-black rounded-md"
          id=""
          value={downPayment}
          onChange={handleDownPaymentChange}
        />
        {errorMeter && (
          <label className={`${errorMeter}`}>
            min~{formattedDownPayment || "N/A"}
          </label>
        )}
      </div>
      <select
        className="w-full md:w-1/5 p-2 text-black rounded-md text-[13px] h-10"
        value={props.percentage}
        onChange={(e) => props.sPercentage(e.target.value)}
      >
        <option value="">percentage</option>
        {props?.find?.percentage?.map((p: number | string, i: number) => (
          <option value={p} key={i}>
            {p}%
          </option>
        ))}
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
        {error && (
          <label className={`${error}`}>min~{meterStart[typeIndex]}m</label>
        )}
      </div>
    </div>
  );
};

export default DownPaymentProject;
