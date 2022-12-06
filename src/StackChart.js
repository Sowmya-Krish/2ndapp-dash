import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export function StackChart({ labels }) {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Total Win",
        data: [30, 150, 50, 80, 90, 180, 70],
        borderColor: "hsl(255 95% 68%)",
        backgroundColor: "hsl(255 95% 68% / 50%)",
        lineTension: 0.2,
      },
      {
        fill: true,
        label: "Total Loss",
        data: [100, 120, 50, 80, 90, 10, 90],
        borderColor: "#hsl(197 100% 50%)",
        backgroundColor: "hsl(197deg 100% 50% / 50%)",
        lineTension: 0.2,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
