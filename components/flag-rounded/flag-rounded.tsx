import { FlagRoundedProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

export const FlagRounded: FC<FlagRoundedProps> = ({ code }) => {
  return (
    <div className="rounded-full w-6 h-6 bg-rose-100 overflow-hidden flex justify-center border border-borderColor">
      <Image
        src={`https://flagcdn.com/w1280/${code}.webp`}
        alt="country"
        width={32}
        height={36}
      />
    </div>
  );
};
