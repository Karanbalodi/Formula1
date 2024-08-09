import { FC } from "react";
import { Standings } from "./standings";
import { FastestLap } from "./fastest-lap";

import dynamic from "next/dynamic";
import { RaceDetailsProps } from "@/types";
import { createStandingsData, findFastestLap } from "@/utils";
import { getConstructorRanking, getDriverRanking } from "@/queries/queries";

const MapComponent = dynamic(() => import("../map-component/map-component"), {
  ssr: false,
});

export const RaceDetails: FC<RaceDetailsProps> = async ({
  latitude,
  longitude,
  raceDetails,
}) => {
  const fastestLap = findFastestLap(raceDetails);
  const driverStandings = await getDriverRanking("2024", "14");
  const constructorStandings = await getConstructorRanking("2024", "14");

  const { drivers, constructors } = createStandingsData(
    driverStandings,
    constructorStandings,
    raceDetails
  );

  return (
    <section className="grid grid-cols-3 gap-4 mt-6">
      <MapComponent latitude={latitude} longitude={longitude} />
      <FastestLap details={fastestLap} />
      <Standings
        driverStandings={drivers}
        constructorStandings={constructors}
      />
    </section>
  );
};
