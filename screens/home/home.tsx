import FastestLapsBarChart from "@/components/charts/fastest-laps-bar-chart/fastest-laps-bar-chart";
import { PositionListing } from "@/components/position-listing/position-listing";
import { RaceDetails } from "@/components/race-details/race-details";
import { RaceGridScatterPlot } from "@/components/charts/race-grid-scatter-plot/race-grid-scatter-plot";
import { getRaceData, getRecentRaceData } from "@/queries/queries";
import { FC } from "react";
import { HomeProps } from "@/types";
import { RaceInformation } from "@/components/race-information/race-information";
import { LapChartServer } from "@/components/charts/lap-chart/lap-chart-server";

export const Home: FC<HomeProps> = async ({
  season: selectedSeason,
  round: selectedRound,
}) => {

  let currentRace;
  if (!!selectedSeason) {
    currentRace = await getRaceData({
      season: selectedSeason,
      round: selectedRound,
    });
  } else {
    currentRace = await getRecentRaceData();
  }

  const { raceName, Circuit, Results, round, date, time, season } = currentRace;
  return (
    <main>
      <RaceInformation
        date={date}
        time={time}
        raceName={raceName}
        circuit={Circuit.circuitName}
        locality={Circuit.Location.locality}
        country={Circuit.Location.country}
      />
      <RaceDetails
        latitude={Circuit?.Location?.lat}
        longitude={Circuit?.Location?.long}
        raceDetails={Results}
      />
      <PositionListing raceDetails={Results} />
      <div className="grid grid-cols-2 gap-4 mt-6">
        <RaceGridScatterPlot raceDetails={Results} />
        <FastestLapsBarChart raceDetails={Results} />
      </div>
      <div className="mt-6">
        <p className="text-lg">Race Timeline</p>
        <p className="text-xs text-grey-8a mb-9">
          click on a lap to view lap summary
        </p>
        <LapChartServer year={season} race={round} />
      </div>
    </main>
  );
};
