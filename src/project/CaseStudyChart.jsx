import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line, Doughnut, Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Premium color palette — works on both light and dark backgrounds
const COLORS = {
  bgArray: [
    "rgba(16, 185, 129, 0.7)", // emerald
    "rgba(14, 165, 233, 0.7)", // sky
    "rgba(168, 85, 247, 0.7)", // purple
    "rgba(234, 179, 8, 0.7)", // amber
    "rgba(239, 68, 68, 0.7)", // red
    "rgba(236, 72, 153, 0.7)", // pink
    "rgba(6, 182, 212, 0.7)", // cyan
    "rgba(249, 115, 22, 0.7)", // orange
  ],
  borderArray: [
    "rgb(16, 185, 129)",
    "rgb(14, 165, 233)",
    "rgb(168, 85, 247)",
    "rgb(234, 179, 8)",
    "rgb(239, 68, 68)",
    "rgb(236, 72, 153)",
    "rgb(6, 182, 212)",
    "rgb(249, 115, 22)",
  ],
  primary: "rgba(16, 185, 129, 0.7)",
  primaryBorder: "rgb(16, 185, 129)",
};

export default function CaseStudyChart({
  title,
  type = "bar",
  data: chartData,
  yLabel,
}) {
  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "rgba(163, 163, 163, 1)" : "rgba(64, 64, 64, 1)";
  const gridColor = isDark
    ? "rgba(255, 255, 255, 0.06)"
    : "rgba(0, 0, 0, 0.06)";

  const isDoughnut = type === "doughnut";
  const isRadar = type === "radar";
  const isHorizontalBar = type === "horizontalBar";
  const isLine = type === "line";

  const needsMultiColor = isDoughnut || isRadar;

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: title,
        data: chartData.values,
        backgroundColor: needsMultiColor
          ? COLORS.bgArray.slice(0, chartData.labels.length)
          : COLORS.primary,
        borderColor: needsMultiColor
          ? COLORS.borderArray.slice(0, chartData.labels.length)
          : COLORS.primaryBorder,
        borderWidth: isDoughnut ? 2 : 1,
        borderRadius: isDoughnut ? 0 : 6,
        borderSkipped: false,
        ...(isLine && {
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: COLORS.primaryBorder,
          backgroundColor: "rgba(16, 185, 129, 0.15)",
        }),
        ...(isRadar && {
          fill: true,
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          borderColor: COLORS.primaryBorder,
          pointBackgroundColor: COLORS.primaryBorder,
          pointBorderColor: "#fff",
          pointHoverRadius: 6,
        }),
      },
    ],
  };

  // Base plugin options
  const plugins = {
    legend: {
      display: isDoughnut,
      position: "bottom",
      labels: {
        color: textColor,
        font: { family: '"Inter", "Helvetica", sans-serif', size: 11 },
        usePointStyle: true,
        padding: 16,
        boxWidth: 8,
      },
    },
    tooltip: {
      backgroundColor: isDark
        ? "rgba(30, 30, 30, 0.95)"
        : "rgba(255, 255, 255, 0.95)",
      titleColor: isDark ? "#e5e5e5" : "#1f2937",
      bodyColor: isDark ? "#a3a3a3" : "#4b5563",
      borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
      usePointStyle: true,
    },
  };

  // Scale options (not for doughnut/radar)
  const cartesianScales = {
    x: {
      grid: { display: false },
      ticks: {
        color: textColor,
        font: { family: '"Inter", "Helvetica", sans-serif', size: 11 },
      },
    },
    y: {
      grid: { color: gridColor },
      ticks: {
        color: textColor,
        font: { family: '"Inter", "Helvetica", sans-serif', size: 11 },
      },
      ...(yLabel && {
        title: {
          display: true,
          text: yLabel,
          color: textColor,
          font: {
            family: '"Inter", "Helvetica", sans-serif',
            size: 12,
            weight: "bold",
          },
        },
      }),
    },
  };

  const radarScales = {
    r: {
      angleLines: { color: gridColor },
      grid: { color: gridColor },
      pointLabels: {
        color: textColor,
        font: { family: '"Inter", "Helvetica", sans-serif', size: 11 },
      },
      ticks: {
        color: textColor,
        backdropColor: "transparent",
        font: { size: 10 },
      },
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800, easing: "easeOutQuart" },
    plugins,
    ...(isDoughnut ? {} : { scales: isRadar ? radarScales : cartesianScales }),
    ...(isHorizontalBar && { indexAxis: "y" }),
  };

  const ChartComponent = isDoughnut
    ? Doughnut
    : isRadar
      ? Radar
      : isLine
        ? Line
        : Bar;

  return (
    <div className="rounded-xl border-[1.5px] border-neutral-300 dark:border-[#333333] p-1 shadow-sm">
      <div className="rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-[#242424] dark:to-neutral-900 p-5">
        <h3 className="text-sm font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
        <div className="h-[260px]">
          <ChartComponent data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
