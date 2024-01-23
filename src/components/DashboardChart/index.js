import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = ({ data1, data2, text1, text2, titleText }) => {
  const data = {
    labels: [text1, text2],
    datasets: [
      {
        label: "Products",
        data: [data1, data2],
        backgroundColor: ["#22a2ff", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: titleText,
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default DashboardChart;
