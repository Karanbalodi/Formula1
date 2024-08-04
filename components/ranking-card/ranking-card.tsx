import { teamColors } from "@/constants";
import { RankingCardProps } from "@/types";
import { convertNationalityToCountryCode } from "@/utils";
import Image from "next/image";
import { FC } from "react";
import { FlagRounded } from "../flag-rounded/flag-rounded";

export const RankingCard: FC<RankingCardProps> = () => {
  const countryCode = convertNationalityToCountryCode("British");
  const teamColor = teamColors["mercedes"];
  return (
    <div className="border border-borderColor rounded-md overflow-hidden">
      <div className="flex">
        <Image
          src="https://rapit.com.br/images/drivers400/lewis_hamilton_headshot.webp"
          alt="Charles Lerlerc"
          width={160}
          height={100}
          className="bg-gradient-to-tl from-teal-500 to-teal-800"
          //   style={{
          //     backgroundColor: teamColor,
          //   }}
        />
        <div className="px-4 py-3">
          <h3 className="font-f-bold text-xl"> 44. Charles Leclerc</h3>
          <div className="flex my-1">
            <div className="flex items-center">
              <FlagRounded code={countryCode} />
              <span className="text-grey-8a ml-2">Monaco</span>
            </div>
            <div className="ml-4 flex items-center">
              <Image
                src="https://rapit.com.br/assets/Redbull800x800-DrR2QuRz.webp"
                alt="constructor"
                width={32}
                height={42}
              />
              <span className="ml-2 text-grey-8a">Ferrari</span>
            </div>
          </div>
          <div>
            <p className="font-f-bold text-sm">+5.430</p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="py-1 px-2 bg-grey-fa rounded-md mr-1">
              <span className="text-grey-8a text-xs">
                Pos{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  02
                </span>
              </span>
            </div>
            <div className="py-1 px-2 bg-grey-fa rounded-md mr-1">
              <span className="text-grey-8a text-xs">
                Points{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  105
                </span>
              </span>
            </div>
            <div className="py-1 px-2 bg-grey-fa rounded-md">
              <span className="text-grey-8a text-xs">
                Wins{" "}
                <span className="text-blackSecondary font-f-bold text-md ml-2">
                  2
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
