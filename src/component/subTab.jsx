import { useState } from "react";

const SubTab = () => {
  const tabs = [
    "Shivalik",
    "Axis Bank",
    "Manage Beneficiary",
    "Whitelist Account",
  ];
  const [activeTab, setActiveTab] = useState("Shivalik");

  return (
    <div className="">
      <div className="max-w-full flex gap-1 px-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` tabs relative py-1 text-sm font-medium whitespace-nowrap transition-colors
              ${
                activeTab === tab
                  ? "text-indigo-600"
                  : "text-#666D80 hover:text-[#5B4EB1]"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5B4EB1] rounded-t-md " />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubTab;
