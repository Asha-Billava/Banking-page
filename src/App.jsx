import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./component/sidebar";
import Navbar from "./component/navbar";
import Table from "./component/Table";
import BalanceCard from "./component/balanceCard";
import BankInfoCard from "./component/bankInfo";
import Card from "./component/card";
import BalanceChart from "./component/balanceChart";
import SubTab from "./component/subTab";
import { transactions, balanceData } from "./assets/jsonData";
function App() {
  return (
    <>
      <div className="MainContainer">
        {/* Sidebar */}
        <aside className="text-white p-4">
          <SideBar />
        </aside>
        {/* Main Content */}
        <main className="flex flex-col min-h-screen h-[100vh] w-[100%] overflow-y-auto">
          {/* Navbar */}
          <header className="p-4 pl-0 w-[100%]">
            <Navbar />
          </header>

          {/* Tab Row (Thin) */}
          <div className=" text-sm p-2 pl-0">
            <SubTab />
          </div>

          {/* Cards Row */}

          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 pl-0">
            {/* First card (wide on desktop) */}
            <div className="md:col-span-2 lg:col-span-2 rounded-xl">
              <Card>
                <div className="grid grid-cols-1 gap-4">
                  <BalanceCard {...balanceData[0]} />

                  <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {balanceData.slice(1).map((card, index) => (
                      <BalanceCard key={index} {...card} />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Second div: contains two cards side by side on md+ */}
            <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Chart card */}
              <div className="md:col-span-1">
                <Card>
                  <BalanceChart />
                </Card>
              </div>

              {/* Bank Info card */}
              <div className="md:col-span-1">
                <BankInfoCard />
              </div>
            </div>
          </section>

          {/* Table Row */}
          <section className="p-4 pl-0">
            <Table data={transactions} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
