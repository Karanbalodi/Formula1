import { LabelProps } from "@/types";
import { FC } from "react";

export const Label: FC<LabelProps> = ({ label }) => (
  <label className="text-xs text-grey-8a block mb-2">{label}</label>
);
