import { PlusCircle, Eye, Copy } from "lucide-react";
import company from "../assets/company.png";

export default function BankInfoCard() {
  return (
    <div className="bg-[#533CD2] text-white  shadow-md p-6 flex flex-col justify-between rounded-[24px] shadow-sm border-none h-[100%]">
      <div className="flex justify-between items-center flex-col xs:flex-row gap-2">
        {/* <h2 className="text-lg font-semibold">SHIVALIK</h2> */}
        <img
          src={company}
          alt="company"
          className="invert brightness-0 h-7 w-auto"
        />
        <p className="text-xl font-bold  mr-1 flex items-center gap-2">
          ₹ 8,00,00,000 <Eye className="w-5 h-5 " />
        </p>
      </div>
      <div className="mt-4 text-sm">
        <hr className="border-t-[0.5px] border-[#b4bbcc61]"></hr>
        <div className="flex justify-between items-center p-2">
          {" "}
          <p>Account Number</p>
          <p className=" mr-1 flex items-center gap-2">
            {" "}
            PAY2WP504231051 <Copy className="w-4 h-4 " />
          </p>
        </div>
        <hr className="border-t-[0.5px] border-[#b4bbcc61]"></hr>

        <div className="flex justify-between p-2">
          <p>IFSC Code</p>
          <p> AUBL0REMMIT</p>
        </div>
        <hr className="border-t-[0.5px] border-[#b4bbcc61]"></hr>
        <button className="w-full flex h-[42px] mt-6 items-center justify-center py-2 Transfer">
          <PlusCircle className="w-4 h-4 mr-2" />
          Transfer
        </button>
      </div>
    </div>
  );
}
