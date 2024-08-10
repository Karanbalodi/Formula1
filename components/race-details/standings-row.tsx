import { FC } from "react";
import { convertNationalityToCountryCode } from "@/utils";
import { FlagRounded } from "../flag-rounded/flag-rounded";
import { StandingsRowProps } from "@/types";
import { FaArrowTrendUp } from "react-icons/fa6";

export const StandingsRow: FC<StandingsRowProps> = ({
  name,
  subtitle,
  nationality,
  points,
  change,
  index,
  timing,
  skipOneIndex,
}) => {
  const countryCode = convertNationalityToCountryCode(nationality);
  const factor = skipOneIndex ? (index + 1) % 2 : index % 2;

  return (
    <div
      className={`flex items-center justify-between py-1 px-3 ${
        factor !== 0 && "bg-grey-fa"
      }`}
    >
      <div className={`flex items-center ${!!timing && "w-5/12"}`}>
        <span className={`text-md mr-2 ${!!timing ? "w-8" : "w-5"}`}>
          {index}.
        </span>
        <FlagRounded code={countryCode} />
        <div className="ml-2">
          <p className="text-sm">{name}</p>
          <p className="text-grey-8a text-xs">{subtitle}</p>
        </div>
      </div>
      {!!timing && <div className="flex items-center text-sm">{timing}</div>}
      <div className="flex items-center">
        <p className="text-sm">{points} PTS</p>
        {!!change && (
          <p className="text-xs ml-2 text-green-600">
            <FaArrowTrendUp />+{change}
          </p>
        )}
      </div>
    </div>
  );
};
