"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { TbCalendarSearch } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa6";
import { createDropdownCompatibleData } from "@/utils";
import { RaceSelectionFormProps, Schedule } from "@/types";

import { Label } from "./label";
import { Dropdown } from "../dropdown/dropdown";
import { getAvailableRacesInSeason } from "@/queries/queries";

export const RaceSelectionForm: FC<RaceSelectionFormProps> = ({
  seasons,
  selectedSeason: searchedSeason,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<string>(searchedSeason ?? '');
  const [availableRounds, setAvailableRounds] = useState<Array<Schedule>>([]);
  const [selectedRound, setSelectedRound] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [seasonError, setSeasonError] = useState<string>();
  const [raceError, setRaceError] = useState<string>();

  const preSelectSeason = useCallback(() => {
    if (!!searchedSeason) {
      fetchAvailableRacesInSeason(searchedSeason);
    }
  }, [searchedSeason]);

  useEffect(() => {
    preSelectSeason();
  }, [preSelectSeason]);

  const fetchAvailableRacesInSeason = async (season?: string) => {
    setLoading(true);
    const races = await getAvailableRacesInSeason(season);
    setAvailableRounds(races);
    setLoading(false);
  };

  const handleSeason = (value: string) => {
    setSeasonError("");
    setSelectedSeason(value);
    fetchAvailableRacesInSeason(value);
  };

  const handleRace = (value: string) => {
    setSelectedRound(value);
  };

  const handleSubmit = () => {
    if (!!selectedRound && !!selectedSeason) {
      redirect(`/?season=${selectedSeason}&round=${selectedRound}`);
    } else if (!!selectedSeason) {
      setRaceError("Select Round");
    } else {
      setSeasonError("Select Season");
    }
  };

  return (
    <form
      action={handleSubmit}
      className="flex pt-6 pb-8 border-b border-borderColor border-solid items-end"
    >
      <div className="mr-4">
        <Label label="Select Season" />
        <Dropdown
          icon={<TbCalendarSearch size={18} />}
          label="Season"
          options={createDropdownCompatibleData(seasons, "season")}
          onChange={handleSeason}
          error={seasonError}
          value={selectedSeason}
        />
      </div>
      <div>
        <Label label="Select Round" />
        <Dropdown
          icon={<FaFlagCheckered size={16} />}
          label="Race"
          options={createDropdownCompatibleData(availableRounds, "schedule")}
          onChange={handleRace}
          error={raceError}
          loading={loading}
        />
      </div>

      <button
        className="rounded-md px-6 h-10 ml-4 text-white bg-red font-bold shadow-md transform transition duration-150 active:scale-95 active:shadow-none"
        type="submit"
        onClick={handleSubmit}
      >
        Go
      </button>
    </form>
  );
};
