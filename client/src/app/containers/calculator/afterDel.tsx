import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AfterDel = (props: any) => {
  //   console.log(props);

  let DeliveryDateLoop = 0;
  if (props.info.deliveryDate == 0) {
    DeliveryDateLoop = 5;
  } else {
    DeliveryDateLoop = Number(props.info.installment - props.info.deliveryDate);
  }
  const totalPrice = (props.info.downPayment / props.info.percentage) * 100;
  const installment =
    (totalPrice * (100 - Number(props.info.percentage))) / 100;

  return (
    <div className="overflow-x-auto max-w-full rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {Array.from({ length: DeliveryDateLoop }, (_, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                Installment {index + Number(props.info.deliveryDate) + 1}y
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            {Array.from({ length: DeliveryDateLoop }, (_, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(
                  Math.round(installment / Number(DeliveryDateLoop) / 100) * 100
                )}{" "}
                EGP
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AfterDel;
