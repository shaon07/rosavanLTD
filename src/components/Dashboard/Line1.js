import {
  CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
  Tooltip
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        display: false
      },
      grid: {
        display: false
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = ["", "", "", "", "", "", ""];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [40, 50, 20, 70, 30, 90, 10],
      borderColor: "#7848F4",
      backgroundColor: "#7848F4",
      lineTension: 0.5,
      borderWidth: 5,
    }
  ]
};

export default function Line1() {
  return <Line options={options} data={data} />;
}
