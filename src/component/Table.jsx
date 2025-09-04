import { Filter, Send, PlusCircle } from "lucide-react";
import { useState } from "react";
import { tableBtn } from "../assets/jsonData";
export default function Table({ data }) {
  const [active, setActive] = useState(1);

  const handleActive = (key) => {
    setActive(key);
  };
  return (
    <div className="rounded-[24px] shadow-sm border-none bg-white p-[12px] h-[100%]">
      {/* Tabs + Actions */}
      <div className="flex justify-between border-b-transparent px-4 py-3  flex-col  md:flex-row gap-3">
        <div className="flex gap-2 text-sm font-medium flex-col sm:flex-row">
          {tableBtn.map((item) => {
            return (
              <button
                key={item.key}
                onClick={(e) => handleActive(item.key)}
                className={item.key == active ? "active" : ""}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2 text-sm font-medium flex-col sm:flex-row ">
          <button className="flex items-center px-3 py-1.5 text-sm border rounded-lg sm:text-center">
            <Filter className="w-4 h-4 mr-1" /> Filter
          </button>
          <button
            className="flex items-center px-3 py-1.5 text-sm  text-white sm:text-center"
            style={{ background: "#533CD2" }}
          >
            <PlusCircle className="w-4 h-4 mr-1" /> Send Amount
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-scroll max-h-[325px] overflow-y-auto overflow-x-auto">
        <table className="w-full text-sm border-0">
          <thead className="bg-[#F0F1F4] text-gray-600 text-left sticky top-0 z-10">
            <tr className="">
              <th className="px-4 py-1 rounded-tl-[24px] rounded-bl-[24px]">
                Date
              </th>
              <th className="px-4 py-1">IRN</th>
              <th className="px-4 py-1">Mode</th>
              <th className="px-4 py-1">UTR</th>
              <th className="px-4 py-1">Amount</th>
              <th className="px-4 py-1 rounded-tr-[24px] rounded-br-[24px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              const DateVal = row.date.split(" ");
              const length = data.length - 1;
              console.log(idx, length, "DDD");

              return (
                <tr
                  key={idx}
                  className={`${
                    idx !== length ? "border-b-[0.5px]" : "none"
                  } border-[#CAD1E0] hover:bg-gray-50 text-left`}
                >
                  <td className="px-4 py-2">
                    {DateVal[0]}{" "}
                    <span className="text-[13px] text-[#666D80]">
                      {DateVal[1]}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[#533CD2] font-medium">
                    {row.irn}
                  </td>
                  <td className="px-4 py-2">{row.mode}</td>
                  <td className="px-4 py-2">{row.utr}</td>
                  <td className="px-4 py-2 text-green-600 font-semibold">
                    {row.amount}
                  </td>
                  <td className="px-4 py-2">
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
