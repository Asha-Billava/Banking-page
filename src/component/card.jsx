import React from "react";

function Card({ children }) {
  return (
    <div className="rounded-[24px] shadow-sm border-none bg-white p-[15px] ">
      <div className="flex items-center justify-between mb-4 flex-col sm:flex-row gap-2">
        <div className="flex gap-6 font-bold text-[20px]">
          <h6>All Balance</h6>
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <span className="flex items-center gap-1  font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            No.of Transaction count
          </span>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default Card;
