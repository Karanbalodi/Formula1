import { FlagRoundedProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

export const FlagRounded: FC<FlagRoundedProps> = ({ code }) => {
  return (
    <div className="flex relative justify-center border border-borderColor items-center box-border overflow-hidden align-middle outline-none rounded-full w-6 h-6">
      <Image
        src={`https://flagcdn.com/${code}.svg`}
        alt="country"
        width={30}
        height={16}
        className="flex object-cover w-full h-full transition-opacity !duration-500"
      />
    </div>
  );
};
