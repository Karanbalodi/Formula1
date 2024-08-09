import { FC } from "react";
import { StandingsRow } from "../race-details/standings-row";
import { RankingCard } from "../ranking-card/ranking-card";
import { PositionListingProps, RacingData } from "@/types";

export const PositionListing: FC<PositionListingProps> = ({ raceDetails }) => {
  const topThree = raceDetails?.slice(0, 3);
  return (
    <section>
      <p className="font-f-bold text-2xl my-4 text-red">Race Rankings</p>
      <div className="grid grid-cols-3 gap-4">
        {topThree?.map((drivers: RacingData, index) => (
          <RankingCard
            key={drivers.Driver.driverId}
            name={`${drivers.Driver.givenName} ${drivers.Driver.familyName}`}
            driverNumber={drivers.Driver.permanentNumber}
            points={drivers.points}
            time={drivers?.Time?.time}
            status={drivers.status}
            grid={drivers.grid}
            index={index + 1}
            constructor={drivers.Constructor}
            nationality={drivers.Driver.nationality}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>
          <div className="rounded-md overflow-hidden mt-3">
            <StandingsRow
              name="Charles Lerlec"
              subtitle="Ferrari"
              nationality={"Monegasque"}
              points={300}
              index={3}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Max Verstappen"
              subtitle="Redbull Racing"
              nationality={"Dutch"}
              points={200}
              index={4}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={5}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={6}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={7}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={8}
              timing={"+2.300"}
            />
          </div>
        </div>
        <div>
          <p className="text-lg">Constructor Ranking</p>
          <div className="rounded-md overflow-hidden mt-3">
            <StandingsRow
              name="Charles Lerlec"
              subtitle="Ferrari"
              nationality={"Monegasque"}
              points={300}
              index={3}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Max Verstappen"
              subtitle="Redbull Racing"
              nationality={"Dutch"}
              points={200}
              index={4}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={5}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={6}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={7}
              timing={"+2.300"}
            />
            <StandingsRow
              name="Lewis Hamilton"
              subtitle="Mercedes"
              nationality={"British"}
              points={180}
              index={8}
              timing={"+2.300"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
