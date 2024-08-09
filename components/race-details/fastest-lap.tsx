import NumberTicker from "../magicui/number-ticker";
import { FC } from "react";
import { FastestLapProps } from "@/types";
import { FlagRounded } from "../flag-rounded/flag-rounded";
import { convertNationalityToCountryCode } from "@/utils";

export const FastestLap: FC<FastestLapProps> = ({ details }) => {
  return (
    <div className="border border-borderColor rounded-md px-4 py-3">
      <p className="text-2xl">Fastest Laps</p>
      <div className="rounded-md overflow-hidden mt-2">
        <table className="w-full">
          <thead className="bg-grey-fa">
            <tr className="text-grey-8a text-sm text-left">
              <th className="px-3 py-2">Driver</th>
              <th className="py-2">Lap</th>
              <th className="pr-3 py-2 text-center">Time</th>
              <th className="pr-1 py-2">Speed <span className="text-xs">(kph)</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className="block pt-3 bg-white"></tr>
            {details?.map((detail, index) => (
              <tr
                className={`text-left ${index % 2 === 0 && "bg-grey-fa"}`}
                key={detail?.driver}
              >
                <td className="py-1 px-2">
                  <div className="flex items-center">
                    <span>{index + 1}.</span>&nbsp;
                    <FlagRounded code={convertNationalityToCountryCode(detail.driverNationality)} />
                    <div className="ml-2">
                      <p className="text-sm">{detail?.driver}</p>
                      <p className="text-grey-8a text-xs">
                        {detail?.constructor?.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-1 text-xs">{detail?.lap}</td>
                <td className="py-1 text-xs text-end">{detail?.time}</td>
                <td className="pr-3 py-1 text-xs text-center">
                  <NumberTicker value={Number(detail?.speed)} className="text-sm"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
