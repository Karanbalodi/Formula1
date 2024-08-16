"use client";

import { RaceGridScatterPlotProps } from "@/types";
import { FC } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { createColorPicker, isColorAvailable } from "@/utils";
import { randomColors, teamColors } from "@/constants/constants";
import { scatterPlotConstants } from "@/constants/chart-constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const RaceGridScatterPlot: FC<RaceGridScatterPlotProps> = ({
  raceDetails,
}) => {
  const pickColor = createColorPicker(randomColors);

  const scatterData = {
    datasets: raceDetails.map((driver) => {
      const colors = isColorAvailable(driver.Constructor.constructorId)
        ? teamColors[driver.Constructor.constructorId]
        : pickColor(driver.Constructor.constructorId);
      return {
        label: driver.Driver.familyName,
        data: [
          {
            x: parseInt(driver.grid),
            y: parseInt(driver.position),
          },
        ],
        backgroundColor: colors.from,
        pointRadius: 5,
        showLine: true,
      };
    }),
  };

  return (
    <div className="w-[100%]">
      <p className="text-lg mb-3">Finishing Poisition vs Starting Position</p>
      <Scatter
        height={70}
        width="100%"
        data={scatterData}
        options={scatterPlotConstants}
      />
    </div>
  );
};
