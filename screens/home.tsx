import FastestLapsBarChart from "@/components/charts/fastest-laps-bar-chart/fastest-laps-bar-chart";
import { PositionListing } from "@/components/position-listing/position-listing";
import { RaceDetails } from "@/components/race-details/race-details";
import { RaceGridScatterPlot } from "@/components/charts/race-grid-scatter-plot/race-grid-scatter-plot";
import { getRaceData, getRecentRaceData } from "@/queries/queries";
import { FC } from "react";
import { HomeProps } from "@/types";
import { RaceInformation } from "@/components/race-information/race-information";
import { LapChartServer } from "@/components/charts/lap-chart/lap-chart-server";
import { UpcomingRace } from "@/components/upcoming-race/upcoming-race";

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

  if (!currentRace) {
    return <UpcomingRace />;
  }

  const { raceName, Circuit, Results, round, date, time, season } = currentRace;

  return (
    <main className="mt-6">
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
        season={selectedSeason ?? season}
        round={selectedRound ?? round}
      />
      <PositionListing raceDetails={Results} />
      <div className="grid grid-cols-2 gap-4 mt-6">
        <RaceGridScatterPlot raceDetails={Results} />
        <FastestLapsBarChart raceDetails={Results} />
      </div>
      <LapChartServer season={season} round={round} />
    </main>
  );
};
