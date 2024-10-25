import React, { useState } from "react";
import TableInfo from "./tableInfo";
import TableCalc from "./tableCalc";
import AfterDel from "./afterDel";
type Project = {
  img: string;
  name: string;
  delivery: string[];
  installment: string[];
};

interface CalcButtonProps {
  name: string | undefined;
  selectProject: string;
  selectType: string;
  downPayment: number | string;
  percentage: number | string;
  unitSpace: number | string;
  installment: string;
  deliveryDate: string;
  find: Partial<Project>;
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
      <div className="flex justify-center w-full mb-10 flex-wrap">
        <label htmlFor="" className="text-red-400 w-full text-center">
          {error}
        </label>
        <input
          onClick={handelCalc}
          type="button"
          value="calc"
          className="bg-black text-white capitalize px-4  py-2 rounded-md shadow-md cursor-pointer w-5/12 mt-3"
        />
      </div>
      <div
        className={`${open ? "block" : "hidden"} w-full  flex flex-wrap gap-10`}
      >
        <TableInfo info={props} />
        <TableCalc info={props} />
        <AfterDel info={props} />
      </div>
    </>
  );
};

export default CalcButton;
