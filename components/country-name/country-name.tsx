import { getCountry } from "@/queries/queries";
import { CountryNameProps } from "@/types";
import { FC } from "react";

// RSC
export const CountryName: FC<CountryNameProps> = async ({
  className,
  code,
}) => {
  const country = await getCountry(code);
  return <span className={className}>{country?.[0]?.name?.common}</span>;
};
