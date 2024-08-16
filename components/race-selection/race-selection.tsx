import { getAvailableSeasons } from "@/queries/queries";
import { RaceSelectionForm } from "./race-selection-form";

export const RaceSelection = async () => {
  const availableSeasons = await getAvailableSeasons();

  const {
    MRData: {
      SeasonTable: { Seasons },
    },
  } = availableSeasons;

  const seasons = Seasons?.reverse()

  return <RaceSelectionForm seasons={seasons} />;
};
