"use client";

import { Radar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export default function SkillRadar() {

  const data = {
    labels: [
      "Surgery",
      "Medical Research",
      "Professionalism",
      "Clinical Practice",
      "Detail-focused"
    ],
    datasets: [
      {
        data: [80, 90, 90, 80, 70],

        backgroundColor: "rgba(255,255,255,0.05)",

        borderWidth: 2,

        borderColor: [
          "#ff79fb",
          "#e6ff00",
          "#00ff7f",
          "#2f7bff",
          "#ffb86b"
        ],

        pointBackgroundColor: [
          "#ff79fb",
          "#e6ff00",
          "#00ff7f",
          "#2f7bff",
          "#ffb86b"
        ],

        pointRadius: 4
      }
    ]
  };

const options: ChartOptions<"radar"> = {
  responsive: true,
  maintainAspectRatio: false,

  layout: {
    padding: 10
  },

  scales: {
    r: {
      min: 0,
      max: 100,

      ticks: {
        stepSize: 20,
        color: "rgba(255,255,255,0.7)",
        backdropColor: "transparent"
      },

      grid: {
        color: "rgba(255,255,255,0.25)"
      },

      angleLines: {
        color: "rgba(255,255,255,0.35)"
      },

      pointLabels: {
        color: "#ffffff",
        font: {
          size: 10,
          weight: "normal"
        }
      }
    }
  },

  plugins: {
    legend: { display: false }
  }
};

  return (
    <div className="vit-radar-wrapper">
      <Radar data={data} options={options} />
    </div>
  );
}