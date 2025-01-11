"use client";
// Next.js provides a TypeScript-first environment for building your React application. [[1],[2]]
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { cn } from "~/lib/utils";
import { ShineBorder } from "../ui";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
    fill: boolean;
  }[];
}

interface ChartOptions {
  maintainAspectRatio: boolean;
  scales: {
    x: { display: boolean };
    y: { display: boolean };
  };
  plugins: {
    legend: { display: boolean };
  };
  elements: {
    point: { radius: number };
  };
}

function getLineChart(chartData: ChartData, chartOptions: ChartOptions) {
  if (!chartData) return null;
  return <Line data={chartData} options={chartOptions} />;
}

export default function () {
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
    elements: {
      point: { radius: 0 },
    },
  };

  const directors = [
    {
      title: "Pre-vetted Engineers",
      num: "2000+",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [20, 2020, 4020, 6020, 8020, 10020],
            borderColor: "#3055cf",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            tension: 0.1,
            fill: true,
          },
        ],
      },
    },
    {
      title: "Cost Savings vs. U.S. Market",
      num: "75%",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [100, 175, 306, 535, 937, 1640],
            borderColor: "#3055cf",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            tension: 0.1,
            fill: true,
          },
        ],
      },
    },
    {
      title: "Client Retention Rate +90%",
      num: "90%",
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [100, 105, 120, 135, 180, 190],
            borderColor: "#3055cf",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            tension: 0.1,
            fill: true,
          },
        ],
      },
    },
    { title: "Presence in 3 Major U.S. Tech Hubs" },
  ];

  const shineBorderProps = {
    borderWidth: 2,
    borderRadius: 16,
    color: ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  };

  return (
    <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {directors.map(({ title, chartData, num }, index) => (
        <ShineBorder
          key={index}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border bg-purple-800/20 shadow-[0_0_0_0_rgba(255,255,255,1)] transition-all hover:scale-105 hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)] md:shadow-xl"
          {...shineBorderProps}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-10" />
          <div
            className={cn(
              "relative flex h-full min-h-20 w-full cursor-pointer flex-col justify-between p-4 text-white",
              !chartData && !num && "justify-center",
            )}
          >
            <h2
              className={cn(
                "mb-2 select-none text-lg font-semibold text-white",
                !chartData && !num && "text-center text-3xl",
              )}
            >
              {title}
            </h2>

            {num && (
              <span className="mb-4 block select-none text-6xl font-bold text-white">
                {num}
              </span>
            )}

            {chartData && (
              <div className="relative w-full">
                {getLineChart(chartData, chartOptions)}
              </div>
            )}
          </div>
        </ShineBorder>
      ))}
    </div>
  );
}
