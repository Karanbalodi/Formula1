"use client";

import { FC, useMemo, useState } from "react";
import { StandingsRow } from "./standings-row";
import {
  ConstructorStandingsData,
  DriverStandingsData,
  StandingsProps,
} from "@/types";

// 0 -> Driver
// 1 -> Constructor
export const Standings: FC<StandingsProps> = ({
  driverStandings,
  constructorStandings,
}) => {
  const [selection, setSelection] = useState<number>(0);

  const handleSelection = (value: number) => {
    setSelection(value);
  };

  const standings = useMemo(() => {
    if (selection === 0) {
      return (
        <>
          {driverStandings?.map((standing: DriverStandingsData, index) => (
            <StandingsRow
              key={standing?.name}
              name={standing?.name}
              subtitle={standing?.subtitle}
              nationality={standing?.nationality}
              points={standing?.points}
              change={standing?.change}
              index={index + 1}
            />
          ))}
        </>
      );
    } else {
      return (
        <>
          {constructorStandings?.map(
            (standing: ConstructorStandingsData, index) => (
              <StandingsRow
                key={standing?.name}
                name={standing?.name}
                subtitle={standing?.nationality}
                nationality={standing?.nationality}
                points={standing?.points}
                index={index + 1}
              />
            )
          )}
        </>
      );
    }
  }, [selection]);

  return (
    <div className="border border-borderColor rounded-md px-4 py-3">
      <p className="text-2xl">Standings</p>
      <div className="bg-grey-f3 p-1 flex rounded-md mt-1">
        <div
          className={`w-1/2 text-md flex justify-center items-center rounded-md cursor-pointer py-1 ${
            selection === 0 && "bg-white"
          }`}
          onClick={() => handleSelection(0)}
        >
          <span className={`${selection === 1 && "text-grey-8a"}`}>Driver</span>
        </div>
        <div
          className={`w-1/2 text-md flex justify-center items-center rounded-md cursor-pointer py-1 ${
            selection === 1 && "bg-white"
          }`}
          onClick={() => handleSelection(1)}
        >
          <span className={`${selection === 0 && "text-grey-8a"}`}>
            Constructor
          </span>
        </div>
      </div>
      <div className="rounded-md overflow-hidden mt-3">{standings}</div>
    </div>
  );
};
