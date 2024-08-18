"use client";

import { FC, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { LapChartProps } from "@/types";
import { formatSnakeCase } from "@/utils";
import { lapChartOptions } from "@/constants/chart-constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const LapChart: FC<LapChartProps> = ({ laps }) => {
  const [visibleDrivers, setVisibleDrivers] = useState(
    Object.keys(laps).map((_, index) => index < 3)
  );

  const datasets = Object.keys(laps).map((driverId, index) => {
    return {
      label: formatSnakeCase(driverId),
      data: laps[driverId]?.lapData,
      fill: false,
      borderColor: laps[driverId]?.from,
      backgroundColor: laps[driverId].from,
      hidden: !visibleDrivers[index],
    };
  });

  const chartData = {
    datasets,
  };

  const toggleDriverVisibility = (index: number) => {
    const newVisibility = [...visibleDrivers];
    newVisibility[index] = !newVisibility[index];
    setVisibleDrivers(newVisibility);
  };

  return (
    <>
      <Line
        data={chartData}
        height={40}
        width="100%"
        options={lapChartOptions}
      />
      <div className="mb-4 flex flex-wrap justify-center">
        {Object.keys(laps).map((driver, index) => (
          <div
            key={index}
            className={`cursor-pointer text-xs rounded-md border-2 px-2 py-1 mx-1 mt-2`}
            style={{
              color: laps[driver].from,
              borderColor: visibleDrivers[index] ? laps[driver].to : "#ebebeb",
            }}
            onClick={() => toggleDriverVisibility(index)}
          >
            {formatSnakeCase(driver)?.split(" ")?.[0]}
          </div>
        ))}
      </div>
    </>
  );
};
