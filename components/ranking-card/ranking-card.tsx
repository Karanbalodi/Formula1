import { teamColors } from "@/constants/constants";
import { RankingCardProps } from "@/types";
import {
  convertNationalityToCountryCode,
  isColorAvailable,
  loadConstructorImage,
  loadDriverImage,
} from "@/utils";
import Image from "next/image";
import { FC } from "react";
import { FlagRounded } from "../flag-rounded/flag-rounded";
import { CountryName } from "../country-name/country-name";
import { BiTimer } from "react-icons/bi";

export const RankingCard: FC<RankingCardProps> = ({
  driverNumber,
  driverId,
  name,
  constructor,
  nationality,
  index,
  points,
  grid,
  status,
  time,
}) => {
  const countryCode = convertNationalityToCountryCode(nationality);
  const teamColor =
    teamColors[
      isColorAvailable(constructor.constructorId)
        ? constructor.constructorId
        : "default"
    ];

  return (
    <div
      className="border border-borderColor rounded-md overflow-hidden"
      style={{
        background: `linear-gradient(to top left, ${teamColor.from}, ${teamColor.to})`,
      }}
    >
      <div className="flex">
        <Image
          src={loadDriverImage(driverId)}
          alt={name}
          width={160}
          height={100}
        />
        <div className="px-3 py-3 w-full flex flex-col justify-between">
          <h3 className="font-f-bold text-white text-lg">
            {driverNumber}. {name}
          </h3>
          <div className="flex items-center -mt-1">
            <div className="flex items-center">
              <BiTimer size={24} className="text-white" />
              <p className="text-sm ml-1 text-white">
                {status === "Finished"
                  ? index === 1
                    ? "Leader"
                    : time
                  : status}
              </p>
            </div>
            <div className="flex items-center ml-6">
              <Image
                src={loadConstructorImage(constructor.constructorId)}
                alt={constructor.name}
                width={38}
                height={44}
              />
              <span className="text-white text-sm">{constructor.name}</span>
            </div>
          </div>
          <div className="flex items-center">
            <FlagRounded code={countryCode} />
            <CountryName
              code={countryCode}
              className="text-white ml-1 text-sm"
            />
          </div>
          <div className="flex justify-between w-[96%] mt-2">
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-sm">
                Pos{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  {index}
                </span>
              </span>
            </div>
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-sm">
                Points{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  {points}
                </span>
              </span>
            </div>
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-sm">
                Grid{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  {grid}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
