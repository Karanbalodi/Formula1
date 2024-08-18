import { getLapChartData, getPitStopData } from "@/queries/queries";
import { LapChartServerProps } from "@/types";
import { FC } from "react";
import { LapChart } from "./lap-chart";
import { processLapData } from "@/utils";
import HorizontalTimeline from "../timeline/timeline";

export const LapChartServer: FC<LapChartServerProps> = async ({
  year,
  race,
}) => {
  const lapsData = await getLapChartData(year, race);
  const pitStops = await getPitStopData(year, race);
  const processedData = processLapData(lapsData);

  return (
    <>
      <HorizontalTimeline
        laps={lapsData.Races?.[0]?.Laps}
        pitStops={pitStops}
      />
      <p className="text-lg">Lap Position vs Lap Number</p>
      <p className="text-xs text-grey-8a mb-8">
        Hover on points to see lap time for a driver
      </p>
      <LapChart laps={processedData} />
    </>
  );
};
