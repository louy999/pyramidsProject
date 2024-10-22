"use client";
import React, { useState, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableCalc = (props: any) => {
  const [deliveryPercentage, setDeliveryPercentage] = useState<
    number | undefined
  >();

  useEffect(() => {
    if (props.info.installment == 5) {
      setDeliveryPercentage(50);
    } else if (props.info.installment == 8) {
      setDeliveryPercentage(40);
    } else if (props.info.installment == 9) {
      setDeliveryPercentage(45);
    } else if (props.info.installment == 10) {
      setDeliveryPercentage(50);
    } else {
      setDeliveryPercentage(50);
    }
  }, [props.info]);

  const DeliveryDateLoop = Number(props.info.deliveryDate);

  const indexDownPaymentPrec =
    props?.info?.find?.percentage?.indexOf(props?.info?.percentage) ?? -1;

  const returnDownPayment =
    indexDownPaymentPrec !== -1 &&
    props?.info?.find?.rate_down?.[indexDownPaymentPrec]
      ? (props?.info?.downPayment *
          props?.info?.find?.rate_down[indexDownPaymentPrec]) /
        100
      : 0;
  const percentageDifference =
    (deliveryPercentage ?? 0) - props?.info?.percentage;
  const residual = percentageDifference / 10;

  let remainingAmount = percentageDifference;
  const installmentAmounts: number[] = [];

  for (let i = 0; i < Math.ceil(residual); i++) {
    if (remainingAmount > 10) {
      installmentAmounts.push(10);
      remainingAmount -= 10;
    } else {
      installmentAmounts.push(remainingAmount);
      remainingAmount = 0;
    }
  }

  const totalPrice =
    (Number(props?.info?.downPayment) / props?.info?.percentage) * 100;
  console.log("totalPrice " + totalPrice);

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Down Payment
            </th>
            {Array.from({ length: DeliveryDateLoop }, (_, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                Installment {index + 1}y
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td></td>
            <td className="px-6 py-4">
              {props?.info?.downPayment?.toLocaleString()} EGP
            </td>
            {Array.from({ length: DeliveryDateLoop }, (_, index) => {
              if (index < installmentAmounts.length) {
                const price = (totalPrice * installmentAmounts[index]) / 100;
                return (
                  <td key={index} scope="col" className="px-6 py-3">
                    {price.toLocaleString()} EGP
                  </td>
                );
              } else {
                return (
                  <td key={index} scope="col" className="px-6 py-3">
                    0 EGP
                  </td>
                );
              }
            })}
          </tr>
          <tr className="bg-white border-b">
            <td
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              scope="col"
            >
              Returning
            </td>
            <td className="px-6 py-4">
              {returnDownPayment.toLocaleString()} EGP
            </td>
            {Array.from({ length: DeliveryDateLoop }, (_, index) => {
              if (props.info.find.batch && index < installmentAmounts.length) {
                const price =
                  (returnDownPayment * installmentAmounts[index]) / 100;
                return (
                  <td key={index} scope="col" className="px-6 py-3">
                    {price.toLocaleString()} EGP
                  </td>
                );
              } else {
                return (
                  <td key={index} scope="col" className="px-6 py-3">
                    0 EGP
                  </td>
                );
              }
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCalc;
