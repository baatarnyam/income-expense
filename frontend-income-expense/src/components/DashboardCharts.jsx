import BarChart from "./BarChart";

const DashboardCharts = () => {
  return (
    <div className="w-[1200px] h-[284px] flex justify-between mt-6 border">
      <div className="w-[588px] h-[284px] flex flex-col rounded-[12px] bg-white">
        <div className="w-[588px] h-14 rounded-md flex items-center pl-6 text-base font-semibold">
          Income Expense
        </div>
        <hr />
        <BarChart />
      </div>

      <div className="w-[588px] h-[284px] flex flex-col rounded-[12px] bg-white">
        <div className="w-[588px] h-14 rounded-md flex items-center pl-6 text-base font-semibold">
          Income Expense
        </div>
        <hr />
        <BarChart />
      </div>
    </div>
  );
};
export default DashboardCharts;
