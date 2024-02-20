import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

const DashboardCharts = () => {
  return (
    <div className="w-[1200px] h-[284px] flex justify-between mt-6">
      <div className="w-[588px] h-[284px] flex flex-col rounded-[12px] bg-white">
        <div className="w-[588px] h-14 rounded-md flex items-center pl-6 text-base font-semibold">
          Income Expense
        </div>
        <hr />
        <BarChart />
      </div>

      <div className="w-[588px] h-[284px] flex flex-col rounded-[12px] bg-white">
        <div className="w-[588px] h-14 rounded-md flex justify-between items-center px-6 ">
          <p className="text-base font-semibold">Income Expense</p>
          <p className="text-gray-500 font-normal text-base">Jun 1 - Nov 30</p>
        </div>
        <hr />
        <DoughnutChart />
      </div>
    </div>
  );
};
export default DashboardCharts;
