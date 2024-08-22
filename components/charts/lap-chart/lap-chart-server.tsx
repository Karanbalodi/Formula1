import { getLapChartData, getPitStopData } from "@/queries/queries";
import { LapChartServerProps } from "@/types";
import { FC } from "react";
import { LapChart } from "./lap-chart";
import { processLapData } from "@/utils";
import HorizontalTimeline from "../timeline/timeline";
import { DataMissingError } from "@/components/errors/data-missing-error";

export const LapChartServer: FC<LapChartServerProps> = async ({
  season,
  round,
}) => {
  const lapsData = await getLapChartData(season, round);
  const pitStops = await getPitStopData(season, round);

  const processedData = processLapData(lapsData);

  const isLapsDataAvailable = lapsData?.Races?.length > 0;
  return (
    <>
      {isLapsDataAvailable ? (
        <HorizontalTimeline
          laps={lapsData.Races?.[0]?.Laps}
          pitStops={pitStops}
        />
      ) : (
        <DataMissingError
          msg="Race Timeline is not available for this race"
          className="my-24"
        />
      )}
      <p className="text-lg">Lap Position vs Lap Number</p>
      <p className="text-xs text-grey-8a mb-8">
        Hover on points to see lap time for a driver
      </p>
      {isLapsDataAvailable ? (
        <LapChart laps={processedData} />
      ) : (
        <DataMissingError
          msg="Unfortunately, lap data is not available for this race"
          className="my-24"
        />
      )}
    </>
  );
};
