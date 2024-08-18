"use client";

import { StandingsRow } from "@/components/race-details/standings-row";
import { LapData, LapGainersLosers, PitStop } from "@/types";
import {
  calculateGainersAndLosers,
  convertToOrdinal,
  convertToTimeFormat,
  formatSnakeCase,
} from "@/utils";
import { useState } from "react";
import { PiPlayCircle } from "react-icons/pi";

interface HorizontalTimelineProps {
  laps: LapData[];
  pitStops: PitStop[];
}

const HorizontalTimeline = ({ laps, pitStops }: HorizontalTimelineProps) => {
  const [selectedLap, setSelectedLap] = useState<LapData>(laps?.[0]);
  const [gainers, setGainers] = useState<Array<LapGainersLosers>>(
    calculateGainersAndLosers(laps?.[0], laps[0])
  );
  const [playSummary, setPlaySummary] = useState<boolean>(false);

  const findPitstops = (lapNumber: string) => {
    const pitStopsInLap = pitStops.filter(
      (pitStop: PitStop) => pitStop.lap === lapNumber
    );
    return pitStopsInLap;
  };

  const [pitstopsData, setPitstopsData] = useState<PitStop[]>(
    findPitstops("0")
  );

  const handleLapClick = (lap: LapData, index: number) => {
    setPlaySummary(false);
    setSelectedLap(lap);
    setPitstopsData(findPitstops(lap.number));
    setGainers(calculateGainersAndLosers(lap, laps[index - 1] ?? laps[0]));
  };

  const handlePlay = () => {
    setPlaySummary(true);
    setSelectedLap(laps?.[0]);
    for (let i = 1; i < laps.length; i++) {
      setTimeout(() => {
        setSelectedLap(laps?.[i]);
        setPitstopsData(findPitstops(laps[i].number));
        setGainers(calculateGainersAndLosers(laps[i], laps[i - 1]));
      }, 3000 * i);
    }
  };

  const losers = [...gainers]?.reverse();

  return (
    <>
      <p
        className="flex items-center text-blue-500 text-sm mt-3 cursor-pointer hover:text-blue-900"
        onClick={handlePlay}
      >
        {playSummary ? "Playing summary...." : "Play Summary"}
        <PiPlayCircle size={24} className="ml-1" />
      </p>
      <div className="flex flex-col overflow-scroll p-4">
        <div className="flex">
          {laps?.map((lap, index) => {
            const lapNumber = Number(lap.number);
            const selectedLapNumber = Number(selectedLap?.number);
            return (
              <div key={lap.number}>
                <span className="text-xs -ml-2"> Lap {lap?.number}</span>
                <div className="relative flex items-center">
                  <div
                    className={`z-[9999] cursor-pointer ${
                      selectedLapNumber >= lapNumber
                        ? "bg-red"
                        : "bg-borderColor"
                    } h-6 w-6 rounded-full mr-10`}
                    onClick={() => handleLapClick(lap, index)}
                  />
                  {index < laps.length - 1 && (
                    <div
                      className={`${
                        selectedLapNumber - 1 >= lapNumber
                          ? "bg-red"
                          : "bg-borderColor"
                      } absolute h-2 w-16`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedLap !== null && (
        <div className="mt-2 p-6 border rounded-md border-borderColor mb-12">
          <h4 className="text-2xl text-red font-f-bold mb-6">
            Lap {selectedLap?.number} Summary
          </h4>
          <div className="grid gap-8 grid-cols-2">
            <div>
              <p className="text-md mb-3">Top Position Gainers</p>
              <div className="rounded-md overflow-hidden mt-4">
                <StandingsRow
                  name="Driver Name"
                  timing="Current"
                  stopNumber="Previous"
                  positionGain="Change"
                />
                <div className="mt-2" />
                {gainers?.slice(0, 5)?.map((gain, index) => (
                  <StandingsRow
                    key={gain.driverId}
                    name={formatSnakeCase(gain.driverId)}
                    index={index + 1}
                    timing={gain.currentPosition}
                    stopNumber={gain.previousPosition}
                    positionGain={
                      gain.positionChange > 0
                        ? `+${gain.positionChange}`
                        : `${gain.positionChange}`
                    }
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-md mb-3">Top Position losers</p>
              <div className="rounded-md overflow-hidden mt-4">
                <StandingsRow
                  name="Driver Name"
                  timing="Current"
                  stopNumber="Previous"
                  positionGain="Change"
                />
                <div className="mt-2" />
                {losers?.slice(0, 5)?.map((gain, index) => (
                  <StandingsRow
                    key={gain.driverId}
                    name={formatSnakeCase(gain.driverId)}
                    index={index + 1}
                    timing={gain.currentPosition}
                    stopNumber={gain.previousPosition}
                    positionGain={`${gain.positionChange}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-md mb-3">Top 5 drivers in this lap</p>
              <div className="rounded-md overflow-hidden mt-4">
                <StandingsRow name="Driver Name" timing={"Timing"} />
                <div className="mt-2" />
                {selectedLap?.Timings?.slice(0, 5)?.map((timing) => (
                  <StandingsRow
                    key={timing.driverId}
                    name={formatSnakeCase(timing.driverId)}
                    index={Number(timing.position)}
                    timing={convertToTimeFormat(timing.time)}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-md mb-3">Pit stops</p>
              <div className="rounded-md overflow-hidden mt-4">
                {pitstopsData?.length > 0 && (
                  <StandingsRow
                    name="Driver Name"
                    stopNumber="Stop number"
                    timing="Duration"
                  />
                )}
                <div className="mt-2" />
                {pitstopsData?.length === 0 && (
                  <span className="text-sm text-grey-8a">
                    No pitstops in this lap
                  </span>
                )}
                {pitstopsData?.map((pitStop: PitStop, index) => (
                  <StandingsRow
                    key={pitStop.driverId}
                    name={formatSnakeCase(pitStop.driverId)}
                    index={index + 1}
                    timing={pitStop.duration}
                    stopNumber={convertToOrdinal(Number(pitStop.stop))}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HorizontalTimeline;
