// import React from "react";

// function Navbar() {
//   return (
//     <header className="flex justify-between items-center px-6 py-3 border-b bg-white">
//       <div className="flex items-center gap-2 text-gray-600">
//         <h1 className="text-sm font-medium">Connected Banking</h1>
//         <span className="text-xs text-gray-400">• Sunday, Mar 04</span>
//       </div>

//       <div className="flex items-center gap-3">
//         <div className="relative h-[212px] w-[36px]">
//           <Search className="absolute top-2 left-[12px] w-[20px] h-[20px] text-black-400" />

//           <input
//             type="text"
//             placeholder="Search IRN, UTR, or AMT"
//             className="pl-[40px] pr-[44px] py-[7px] text-sm border-[0.5px] border-[#CAD1E0] rounded-[24px]  focus:ring-indigo-500  focus:outline-none"
//           />
//         </div>
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="user"
//           className="w-8 h-8 rounded-full border"
//         />
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { Search, BellDot, MoveDown, Calendar, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-[100%] w-auto bg-white rounded-[24px] flex justify-between   py-3 px-4 flex-col md:flex-row gap-2  ">
      <div className="flex items-center gap-2 text-gray-600">
        <h5 className="text-md font-medium">Connected Banking</h5>
        <span className="text-[14px] text-gray-400">• Sunday, Mar 04</span>
      </div>
      <div className="flex flex-col sm:flex-row  justify-stretch gap-3">
        <div className="relative flex  gap-6 justify-between items-center ">
          <Search className="absolute top-2 left-[12px] w-[20px] h-[20px] text-black-400" />
          <input
            type="text"
            placeholder="Search IRN, UTR, or AMT"
            className="pl-[40px] pr-[18px] py-[8px] text-sm border-[0.5px] border-[#CAD1E0] rounded-[24px]  w-[100%] focus:ring-indigo-500  focus:outline-none"
          />
        </div>
        <div className="flex justify-stretch gap-3">
          <div className="relative flex gap-6 justify-between items-center">
            <Calendar className="absolute top-2 left-[12px] w-[20px] h-[20px] text-black-400" />
            <select
              type="text"
              placeholder="Search IRN, UTR, or AMT"
              className="appearance-none pl-10 pr-[22px] py-2 text-sm border border-[#CAD1E0] rounded-[24px] focus:ring-indigo-500 focus:outline-none bg-white"
            >
              <option>Today</option>
              <option>Yesterday</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-black-400" />
          </div>
          <div className=" border-[0.5px] IconDiv">
            <BellDot className="w-5 h-5 text-gray-600" />
          </div>
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
