"use client";

import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { FastestLapsBarChartProps } from "@/types";
import { fastestLapConstants } from "@/constants/chart-constants";
import { createColorPicker, isColorAvailable } from "@/utils";
import { randomColors, teamColors } from "@/constants/constants";
import { DataMissingError } from "@/components/errors/data-missing-error";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FastestLapsBarChart: FC<FastestLapsBarChartProps> = ({ raceDetails }) => {
  const pickColor = createColorPicker(randomColors);
  const backgroundColor: Array<string> = [];
  const borderColor: Array<string> = [];
  const speed: Array<number> = [];
  const labels = raceDetails.map((driver) => {
    speed.push(parseFloat(driver?.FastestLap?.AverageSpeed?.speed ?? 0));
    backgroundColor.push(
      isColorAvailable(driver.Constructor.constructorId)
        ? teamColors[driver.Constructor.constructorId].from
        : pickColor(driver.Constructor.constructorId).from
    );
    borderColor.push(
      isColorAvailable(driver.Constructor.constructorId)
        ? teamColors[driver.Constructor.constructorId].to
        : pickColor(driver.Constructor.constructorId).to
    );
    return driver.Driver.familyName;
  });

  const chartData = {
    labels,
    datasets: [
      {
        data: speed,
        backgroundColor,
        borderColor,
        borderWidth: 1,
        barThickness: 16,
        grouped: false,
      },
    ],
  };

  const isLapDataAvailable = !!raceDetails?.[0]?.FastestLap;

  return (
    <div className="w-[100%]">
      <p className="text-lg mb-3">Fastest laps by driver</p>
      {isLapDataAvailable ? (
        <Bar
          height={70}
          width="100%"
          data={chartData}
          options={fastestLapConstants}
        />
      ) : (
        <DataMissingError
          msg="Unfortunately, lap speed is not available for this race"
          className="mt-40"
        />
      )}
    </div>
  );
};

export default FastestLapsBarChart;
