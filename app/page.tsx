import { PositionListing } from "@/components/position-listing/position-listing";
import { RaceDetails } from "@/components/race-details/race-details";
import { getRecentRaceData } from "@/queries/queries";
import { format } from "date-fns";

export default async function Home() {
  const {
    MRData: {
      RaceTable: { Races },
    },
  } = await getRecentRaceData();
  const currentRace = Races[0];

  const { raceName, Circuit, Results, round, date, time } = currentRace;
  return (
    <main>
      <p className="font-f-bold text-red text-4xl mt-12">{raceName}</p>
      <p className="font-f-bold text-blackSecondary text-xl">
        {Circuit?.circuitName}
      </p>
      <p className="text-grey-8a text-sm">
        {format(date, "do MMM yyyy")} 3:30PM UTC
      </p>
      <p className="text-grey-8a text-sm">
        📍 {Circuit?.Location?.locality}, {Circuit?.Location?.country}
      </p>
      <RaceDetails
        latitude={Circuit?.Location?.lat}
        longitude={Circuit?.Location?.long}
        raceDetails={Results}
      />
      <PositionListing raceDetails={Results} />
    </main>
  );
}
