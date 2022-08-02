import { Chart, registerables } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "First dataset",
      data: [500, 600, 530, 410, 440, 650, 560, 320, 670, 430, 640, 740],
      fill: true,
      backgroundColor: ["rgb(120,72,244,.20)"],
      borderColor: "#7848F4",
      lineTension: .5,
    },
  ],
};

var options = {
  plugins: {
    legend: {
        display: false
    }
},
  scales: {
    y: {
      min: 0,
      max: 1000,
      ticks: {
        // forces step size to be 50 units
        stepSize: 200,
      },
    },
  },
};

export default function ChartShaon() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
}
