import { FC } from "react";
import { RaceSelectionProps } from "@/types";
import { getAvailableSeasons } from "@/queries/queries";

import { RaceSelectionForm } from "./race-selection-form";

export const RaceSelection: FC<RaceSelectionProps> = async ({selectedSeason}) => {
  const availableSeasons = await getAvailableSeasons();
  const seasons = availableSeasons?.reverse();

  return <RaceSelectionForm selectedSeason={selectedSeason} seasons={seasons} />;
};
