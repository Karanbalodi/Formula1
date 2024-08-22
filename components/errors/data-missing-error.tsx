import { FC } from "react";
import { DataMissingErrorProps } from "@/types";
import { AiOutlineFrown } from "react-icons/ai";
import { cn } from "@/lib/utils";

export const DataMissingError: FC<DataMissingErrorProps> = ({
  msg,
  className,
  iconSize = 90,
}) => {
  return (
    <div className={cn("flex flex-col items-center mt-40", className)}>
      <AiOutlineFrown size={iconSize} />
      <p className="text-sm mt-6">{msg}</p>
    </div>
  );
};
