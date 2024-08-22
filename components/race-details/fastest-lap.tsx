import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";
import { teamColors } from "@/constants/constants";
import { isColorAvailable, loadConstructorImage } from "@/utils";
import { BiTimer } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FC } from "react";
import { FastestLapProps } from "@/types";
import { DataMissingError } from "../errors/data-missing-error";

export const FastestLap: FC<FastestLapProps> = ({ details }) => {
  const teamColor =
    teamColors[
      isColorAvailable(details.constructor?.constructorId)
        ? details.constructor?.constructorId
        : "default"
    ];

  const isLapDataAvailable = !!details.lap && !!details.driver;

  return (
    <div
      className="rounded-md px-4 py-3"
      style={{
        background: `linear-gradient(to top left, ${teamColor.from}, ${teamColor.to})`,
      }}
    >
      <p className="text-white text-2xl">Fastest Lap</p>
      {isLapDataAvailable ? (
        <div className="flex mt-2">
          <Image
            src={loadConstructorImage(details.constructor?.constructorId)}
            alt={details.constructor.name}
            width={185}
            height={140}
          />
          <div className="ml-6">
            <p className="text-white text-lg">{details.driver}</p>
            <p className="text-white text-md">{details.constructor?.name}</p>
            <div className="text-white text-sm flex items-center mt-1">
              <BiTimer size={20} />
              <p className="ml-1">{details.time}</p>
            </div>
            <div className="text-white text-sm flex items-center mt-1">
              <FaFlagCheckered size={16} />
              <p className="ml-1">{details.lap} lap</p>
            </div>
            <div className="text-white text-sm flex items-center mt-1">
              <IoSpeedometerOutline size={16} />
              <p className="ml-1">Average speed of lap</p>
            </div>
            <div className="text-white text-2xl mt-1">
              <NumberTicker
                value={Number(details.speed)}
                className="text-white text-4xl"
              />
              Kmph
            </div>
          </div>
        </div>
      ) : (
        <DataMissingError
          msg="Unfortunately, lap speed is not available for this race"
          className="text-white mt-6"
        />
      )}
    </div>
  );
};
