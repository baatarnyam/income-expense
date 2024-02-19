import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { data } from "autoprefixer";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "My First Dataset",
            data: [50, 90, 60, 100, 30],
            backgroundColor: [
              "rgba(231, 70, 148, 1)",
              "rgba(28, 100, 242, 1)",
              "rgba(253, 186, 140, 1)",
              "rgba(22, 189, 202, 1)",
              "rgba(242, 144, 28, 1)",
            ],

            hoverOffset: 4,
          },
        ],
        // labels: ["Food", "Bill", "Shopping", "Insurance", "Clothing"],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-[226px] flex items-center justify-center">
      <canvas ref={chartRef} style={{ width: "156px", height: "156px" }} />
    </div>
  );
};

export default DoughnutChart;
