import { FC } from "react";
import { StandingsRow } from "../race-details/standings-row";
import { RankingCard } from "../ranking-card/ranking-card";
import { PositionListingProps, RacingData } from "@/types";
import { getConstructorRanking } from "@/utils";

export const PositionListing: FC<PositionListingProps> = ({ raceDetails }) => {
  const topThree = raceDetails?.slice(0, 3);
  const restDrivers = raceDetails?.slice(3);
  const constructorRanking = getConstructorRanking(raceDetails);

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
          <p className="text-lg">Driver Ranking</p>
          <div className="rounded-md overflow-hidden mt-2">
            {restDrivers?.map((driver: RacingData, index) => (
              <StandingsRow
                key={driver.Driver.driverId}
                name={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
                subtitle={driver.Constructor.name}
                nationality={driver.Driver.nationality}
                points={driver.points}
                index={index + 4}
                timing={
                  driver.status === "Finished"
                    ? driver.Time.time
                    : driver.status
                }
                skipOneIndex
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg">Constructor Ranking</p>
          <div className="rounded-md overflow-hidden mt-2">
            {constructorRanking?.map((constructor, index) => (
              <StandingsRow
                key={constructor?.constructor}
                name={constructor?.constructor}
                subtitle={`${constructor?.drivers?.[0]}, ${constructor?.drivers?.[1]}`}
                nationality={constructor.nationality}
                points={constructor.points}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
