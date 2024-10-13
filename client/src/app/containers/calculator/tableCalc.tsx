import React from "react";

const TableCalc = () => {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td></td>
            <td className="px-6 py-4">Down Payment</td>
            <td className="px-6 py-4">installment</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b">
            <td
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              scope="col"
            >
              Returning
            </td>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCalc;
