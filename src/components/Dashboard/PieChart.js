import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
  // labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 30, 45],
      backgroundColor: [ "#7848F4","#A138E1","#FFD600", ],
      borderColor: ['white'],
      borderWidth: 2,
    },
  ],
};

export default function PieChart() {
  return <Doughnut data={data}  />;
}
