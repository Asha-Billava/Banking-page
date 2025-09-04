import {
  Home,
  Banknote,
  HandCoins,
  ArrowUpRight,
  FileChartColumnIncreasing,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-[100%] w-16 bg-white rounded-[24px] flex flex-col justify-between items-center py-6">
      {/* Top Section */}
      <div className="flex flex-col gap-6 justify-between items-center">
        {/* Logo Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700" />
        {/* Navigation Icons */}
        <ul className="flex flex-col gap-2">
          {/* Home */}
          <li className="w-10 h-10 flex items-center justify-center rounded-md  transition-all duration-300 text-gray-600">
            <Home className="w-5 h-5 " />
          </li>

          {/* Bank */}
          <li className="w-10 h-10 flex items-center justify-center rounded-md  transition-all duration-300 text-gray-600">
            <Banknote className="w-5 h-5" />
          </li>

          {/* Users */}
          <li className="w-10 h-10 flex items-center justify-center rounded-md  transition-all duration-300 text-gray-600">
            <HandCoins className="w-5 h-5" />
          </li>

          <li className="w-10 h-10 flex items-center justify-center rounded-md  transition-all duration-300 text-gray-600">
            <ArrowUpRight className="w-5 h-5" />
          </li>
          <li className="w-10 h-10 flex items-center justify-center rounded-md  transition-all duration-300 text-gray-600">
            <FileChartColumnIncreasing className="w-5 h-5 " />
          </li>
        </ul>
      </div>
    </aside>
  );
}
