import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  // BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  // BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      datasets: [
        {
          // label: "income-expense",
          data: [345345, 1000000, 2000000, 3000000, 456456, 325324, 456454],
          borderColor: "rgba(132, 204, 22, 1)",
          backgroundColor: "rgba(132, 204, 22, 1)",
        },
        {
          // label: "income-expense",
          data: [345345, 1000000, 2000000, 3000000, 456456, 325324, 456454],
          borderColor: "rgba(249, 115, 22, 1)",
          backgroundColor: "rgba(249, 115, 22, 1)",
        },
      ],
    });
  }, []);

  return (
    <div className="w-full h-[226px] flex items-center justify-center">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
