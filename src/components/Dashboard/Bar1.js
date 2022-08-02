import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  categoryPercentage: 1,
  barPercentage: 0.1,
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        display: false,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      barThickness: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["", "", "", "", "", "", "", "", "", ""];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: ["30", "40", "50", "20", "70", "20", "90", "100", "80", "90"],
      backgroundColor: "#7848F4",
      borderRadius: 35,
      barThickness: 4,
      groupPadding: 0,
      categoryPercentage: 5,
      barPercentage: 0.1,
    },
  ],
};

export default function Bar1() {
  return <Bar options={options} data={data} />;
}
