import { teamColors } from "@/constants";
import { RankingCardProps } from "@/types";
import { convertNationalityToCountryCode, loadDriverImage } from "@/utils";
import Image from "next/image";
import { FC } from "react";
import { FlagRounded } from "../flag-rounded/flag-rounded";
import { CountryName } from "../country-name/country-name";
import { BiTimer } from "react-icons/bi";

export const RankingCard: FC<RankingCardProps> = ({
  driverNumber,
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
  const teamColor = teamColors["ferrari"];
  return (
    <div className="border border-borderColor rounded-md overflow-hidden">
      <div className="flex">
        <Image
          src={loadDriverImage("karan")}
          alt="Charles Lerlerc"
          width={150}
          height={90}
          className="bg-gradient-to-tl from-teal-500 to-teal-800"
        />
        <div className="px-3 py-3 w-full flex flex-col justify-between">
          <h3 className="font-f-bold text-xl">
            {driverNumber}. {name}
          </h3>
          <div className="flex items-center">
            <div className="flex items-center">
              <BiTimer size={24} />
              <p className="text-sm ml-1 text-grey-8a">
                {status === "Finished"
                  ? index === 1
                    ? "Leader"
                    : time
                  : status}
              </p>
            </div>
            <div className="flex items-center ml-6">
              <Image
                src="https://rapit.com.br/assets/Redbull800x800-DrR2QuRz.webp"
                alt="constructor"
                width={32}
                height={42}
              />
              <span className="ml-1 text-grey-8a text-[13px]">
                {constructor.name}
              </span>
            </div>
          </div>
          <div className="flex items-center -mt-1">
            <FlagRounded code={countryCode} />
            <CountryName
              code={countryCode}
              className="text-grey-8a ml-1 text-[13px]"
            />
          </div>
          <div className="flex justify-between w-11/12">
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-xs">
                Pos{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  {index}
                </span>
              </span>
            </div>
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-xs">
                Points{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  {points}
                </span>
              </span>
            </div>
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-xs">
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
