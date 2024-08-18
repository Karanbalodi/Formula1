import { FC } from "react";
import { convertNationalityToCountryCode } from "@/utils";
import { FlagRounded } from "../flag-rounded/flag-rounded";
import { StandingsRowProps } from "@/types";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineTrendingFlat } from "react-icons/md";

export const StandingsRow: FC<StandingsRowProps> = ({
  name,
  subtitle,
  nationality,
  points,
  change,
  index,
  timing,
  skipOneIndex,
  stopNumber,
  positionGain,
}) => {
  const countryCode = nationality
    ? convertNationalityToCountryCode(nationality)
    : "";
  const factor = !!index ? (skipOneIndex ? (index + 1) % 2 : index % 2) : 0;

  return (
    <div
      className={`flex items-center justify-between py-1 px-3 ${
        factor !== 0 && "bg-grey-fa"
      }`}
    >
      <div className={`flex items-center ${!!timing && "w-6/12"}`}>
        {!!index && (
          <span className={`text-md mr-2 ${!!timing ? "w-8" : "w-5"}`}>
            {index}.
          </span>
        )}
        {!!nationality && <FlagRounded code={countryCode} />}
        <div className="ml-2">
          <p className="text-sm">{name}</p>
          <p className="text-grey-8a text-xs">{subtitle}</p>
        </div>
      </div>
      {!!stopNumber && (
        <div className="flex items-center">
          <p className="text-sm">{stopNumber}</p>
        </div>
      )}
      {!!timing && <div className="flex items-center text-sm">{timing}</div>}
      {!!points && (
        <div className="flex items-center">
          <p className="text-sm">{points} PTS</p>
          {!!change && (
            <p className="text-xs ml-2 text-green-600">
              <FaArrowTrendUp />+{change}
            </p>
          )}
        </div>
      )}
      {!!positionGain && (
        <div className="flex items-center">
          <p
            className={`text-sm ${
              positionGain.includes("+") && "text-green-600"
            } ${positionGain.includes("-") && "text-red"}`}
          >
            {positionGain}
          </p>
          {positionGain === "0" && <MdOutlineTrendingFlat size={20} className="text-amber-500 ml-1"/>}
          {positionGain.includes("+") && (
            <FaArrowTrendUp className="text-green-600 ml-2" />
          )}
          {positionGain.includes("-") && (
            <FaArrowTrendDown className="text-red ml-2" />
          )}
        </div>
      )}
    </div>
  );
};
