import { RaceInformationProps } from "@/types";
import { formatDate } from "@/utils";
import { FC } from "react";

export const RaceInformation: FC<RaceInformationProps> = ({
  raceName,
  circuit,
  date,
  time,
  locality,
  country,
}) => (
  <>
    <p className="font-f-bold text-red text-4xl">{raceName}</p>
    <p className="font-f-bold text-blackSecondary text-xl">{circuit}</p>
    <p className="text-grey-8a text-sm">{formatDate(`${date}T${time}`)}</p>
    <p className="text-grey-8a text-sm">
      📍 {locality}, {country}
    </p>
  </>
);
