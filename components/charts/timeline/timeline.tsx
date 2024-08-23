"use client";

import { StandingsRow } from "@/components/race-details/standings-row";
import { LapData, LapGainersLosers, PitStop } from "@/types";
import {
  calculateGainersAndLosers,
  convertToOrdinal,
  convertToTimeFormat,
  formatSnakeCase,
} from "@/utils";
import { useEffect, useRef, useState } from "react";
import { PiPlayCircle, PiPauseCircle } from "react-icons/pi";

interface HorizontalTimelineProps {
  laps: LapData[];
  pitStops: PitStop[];
}

const HorizontalTimeline = ({ laps, pitStops }: HorizontalTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedLap, setSelectedLap] = useState<LapData>(laps?.[0]);
  const [gainers, setGainers] = useState<Array<LapGainersLosers>>(
    calculateGainersAndLosers(laps?.[0], laps?.[0])
  );
  const [playSummary, setPlaySummary] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (playSummary) {
      setSelectedLap(laps?.[currentIndex]);
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < laps?.length - 1) {
            const nextIndex = prevIndex + 1;
            updateData(laps?.[nextIndex], nextIndex);
            if (nextIndex % 9 === 0) {
              const scrollValue =
                nextIndex + 9 < laps?.length - 1 ? nextIndex : laps.length - 1;
              scrollToIndex(scrollValue);
            }
            return nextIndex;
          } else {
            setPlaySummary(false);
            clearInterval(intervalId);
            return prevIndex;
          }
        });
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [playSummary, laps]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current && containerRef.current?.children[index]) {
      containerRef.current?.children[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  const findPitstops = (lapNumber: string) => {
    const pitStopsInLap = pitStops?.filter(
      (pitStop: PitStop) => pitStop.lap === lapNumber
    );
    return pitStopsInLap;
  };

  const [pitstopsData, setPitstopsData] = useState<PitStop[]>(
    findPitstops("1")
  );

  const handleLapClick = (lap: LapData, index: number) => {
    setPlaySummary(false);
    setCurrentIndex(index);
    updateData(lap, index);
  };

  const handlePlay = () => {
    setPlaySummary((prev) => !prev);
    if (currentIndex === laps.length - 1) {
      setCurrentIndex(0);
      scrollToIndex(0);
    }
  };

  const losers = [...gainers]?.reverse();

  const updateData = (lap: LapData, index: number) => {
    setSelectedLap(lap);
    setPitstopsData(findPitstops(lap.number));
    setGainers(calculateGainersAndLosers(lap, laps[index - 1] ?? laps[0]));
  };

  return (
    <>
      <div className="flex justify-between items-center mt-12 mb-4">
        <div>
          <p className="text-xl">Race Timeline</p>
          <p className="text-xs text-grey-8a">
            click on a lap to view lap summary
          </p>
        </div>
        <div>
          <p
            className="flex items-center text-blue-500 text-md cursor-pointer hover:text-blue-900"
            onClick={handlePlay}
          >
            {playSummary ? "Playing summary...." : "Play Summary"}
            {playSummary ? (
              <PiPauseCircle size={24} className="ml-1" />
            ) : (
              <PiPlayCircle size={24} className="ml-1" />
            )}
          </p>
        </div>
      </div>
      <div ref={containerRef} className="flex overflow-scroll p-4 -mx-8 px-8">
        {laps?.map((lap, index) => {
          const lapNumber = Number(lap.number);
          const selectedLapNumber = Number(selectedLap?.number);
          return (
            <div key={lap.number}>
              <span className="text-xs -ml-2"> Lap {lap?.number}</span>
              <div className="relative flex items-center">
                <div
                  className={`z-[9999] cursor-pointer ${
                    selectedLapNumber >= lapNumber ? "bg-red" : "bg-borderColor"
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
              <p className="text-md mb-3">Top 5 driver position in this lap</p>
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
                {!pitStops && (
                  <span className="text-sm text-grey-8a">
                    Pitstop data not available
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
