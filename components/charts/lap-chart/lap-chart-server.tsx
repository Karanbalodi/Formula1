import { getLapChartData } from "@/queries/queries";
import { LapChartServerProps } from "@/types";
import { FC } from "react";
import { LapChart } from "./lap-chart";
import { processLapData } from "@/utils";

export const LapChartServer: FC<LapChartServerProps> = async ({
  year,
  race,
}) => {
  const lapsData = await getLapChartData(year, race);
  const processedData = processLapData(lapsData);

  return <LapChart laps={processedData} />;
};
