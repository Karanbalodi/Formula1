"use client";

import { useState } from "react";
import { StandingsRow } from "./standings-row";

// 0 -> Driver
// 1 -> Constructor
export const Standings = () => {
  const [selection, setSelection] = useState<number>(0);

  const handleSelection = (value: number) => {
    setSelection(value);
  };

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
      <div className="rounded-md overflow-hidden mt-3">
        <StandingsRow
          name="Charles Lerlec"
          subtitle="Ferrari"
          nationality={"Monegasque"}
          points={300}
          change={43}
          index={1}
        />
        <StandingsRow
          name="Max Verstappen"
          subtitle="Redbull Racing"
          nationality={"Dutch"}
          points={200}
          change={38}
          index={2}
        />
        <StandingsRow
          name="Lewis Hamilton"
          subtitle="Mercedes"
          nationality={"British"}
          points={180}
          change={28}
          index={3}
        />
        {/* <StandingsRow
          name="Perez"
          subtitle="Redbull Racing"
          nationality={"Mexican"}
          points={180}
          change={28}
          index={4}
        /> */}
      </div>
    </div>
  );
};
