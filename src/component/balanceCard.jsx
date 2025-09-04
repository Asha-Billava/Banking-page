import {
  ArrowUpRight,
  ClockArrowUp,
  BanknoteX,
  Hourglass,
  Minimize2,
} from "lucide-react";

const icons = {
  Payout: <ArrowUpRight className="w-5 h-5 text-[#25253C]" />,
  Initiated: <Minimize2 className="w-5 h-5 text-[#25253C]" />,
  Processing: <Hourglass className="w-5 h-5 text-[#25253C]" />,
  Failed: <BanknoteX className="w-5 h-5 text-[#25253C]" />,
  Pending: <ClockArrowUp className="w-5 h-5 text-[#25253C]" />,
};

export default function BalanceCard({ label, amount, count, key }) {
  return (
    <div className="flex items-center justify-start bg-[#F0F1F4] p-3 rounded-[24px]  gap-2">
      <div className="IconDiv">{icons[label]}</div>
      <div>
        <p className="text-xs text-gray-500 text-left mb-1 font-bold">
          {label}
        </p>
        <div className="flex items-center justify-between gap-2 sm:flex-row">
          <p className="text-base font-semibold">{amount}</p>
          <p className="text-xs text-green-600">({count})</p>
        </div>
      </div>
    </div>
  );
}
