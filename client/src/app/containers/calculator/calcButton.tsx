import React, { useState } from "react";
import TableInfo from "./tableInfo";
import TableCalc from "./tableCalc";

interface CalcButtonProps {
  name: string | undefined;
  selectProject: string;
  selectType: string;
  downPayment: number | string;
  percentage: number | string;
  unitSpace: number | string;
  installment: string;
  deliveryDate: string;
}

const CalcButton: React.FC<CalcButtonProps> = (props) => {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const handelError = (text: string) => {
    setError(text);
    setTimeout(() => {
      setError("");
    }, 5000);
  };
  const handelCalc = () => {
    if (props.selectProject !== "") {
      if (props.selectType !== "") {
        if (props.downPayment !== "") {
          if (props.percentage !== "") {
            if (props.unitSpace !== "") {
              if (props.installment !== "") {
                if (props.deliveryDate !== "") {
                  setOpen(true);
                } else {
                  handelError(`Enter Delivery Date`);
                }
              } else {
                handelError(`Enter  installment `);
              }
            } else {
              handelError(`Enter Unit Space `);
            }
          } else {
            handelError(`Enter Percentage `);
          }
        } else {
          handelError(`Enter  Down Payment`);
        }
      } else {
        handelError(`Enter type unit `);
      }
    } else {
      handelError(`Enter Select Project `);
    }
  };
  return (
    <>
      <div className="flex justify-center w-full mb-10">
        <input
          onClick={handelCalc}
          type="button"
          value="calc"
          className="bg-black text-white capitalize px-4  py-2 rounded-md shadow-md cursor-pointer w-5/12 mt-3"
        />
        <label htmlFor="">{error}</label>
      </div>
      <div
        className={`${open ? "block" : "hidden"} w-full  flex flex-wrap gap-10`}
      >
        <TableInfo info={props} />
        <TableCalc />
      </div>
    </>
  );
};

export default CalcButton;
