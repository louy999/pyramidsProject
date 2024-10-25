/* eslint-disable @typescript-eslint/no-explicit-any */
const TableInfo = (props: any) => {
  const totalPrice = (props?.info?.downPayment / 20) * 100;
  const downPayment = props?.info?.downPayment;
  return (
    <div className="overflow-x-auto max-w-full rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project Name
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Type
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              Down Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Percentage
            </th>
            <th scope="col" className="px-6 py-3">
              unitSpace
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery Date
            </th>
            <th scope="col" className="px-6 py-3">
              Installment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {props?.info?.name}
            </th>
            <td className="px-6 py-4">{props?.info?.selectType}</td>
            <td className="px-6 py-4">{totalPrice.toLocaleString()} EGP</td>
            <td className="px-6 py-4">{downPayment.toLocaleString()} EGP</td>
            <td className="px-6 py-4">{props?.info?.percentage}%</td>
            <td className="px-6 py-4">{props?.info?.unitSpace}m</td>
            <td className="px-6 py-4">{props?.info?.deliveryDate} years</td>
            <td className="px-6 py-4">{props?.info?.installment} years</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
