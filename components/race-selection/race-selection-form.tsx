"use client";

import { FC, useState } from "react";
import { redirect } from "next/navigation";
import { TbCalendarSearch } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa6";

import { Dropdown } from "../dropdown/dropdown";
import { RaceSelectionFormProps, Schedule } from "@/types";
import { getAvailableRacesInSeason } from "@/queries/queries";
import { createDropdownCompatibleData } from "@/utils";

export const RaceSelectionForm: FC<RaceSelectionFormProps> = ({ seasons }) => {
  const [selectedSeason, setSelectedSeason] = useState<string>();
  const [availableRaces, setAvailableRaces] = useState<Array<Schedule>>([]);
  const [selectedRace, setSelectedRace] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAvailableRacesInSeason = async (season: string) => {
    setLoading(true);
    const res = await getAvailableRacesInSeason(season);
    const {
      MRData: {
        RaceTable: { Races },
      },
    } = res;

    setAvailableRaces(Races);
    setLoading(false);
  };

  const handleSeason = (value: string) => {
    // TODO: add loader
    setSelectedSeason(value);
    fetchAvailableRacesInSeason(value);
  };

  const handleRace = (value: string) => {
    setSelectedRace(value);
  };

  const handleSubmit = () => {
    redirect(`/?year=${selectedSeason}&race=${selectedRace}`);
  };

  return (
    <form
      action={handleSubmit}
      className="flex py-6 pb-8 border-b border-borderColor border-solid items-end"
    >
      <div className="mr-4">
        <label className="text-xs text-grey-8a block mb-2">Select Season</label>
        <Dropdown
          icon={<TbCalendarSearch size={18} />}
          label="Season"
          options={createDropdownCompatibleData(seasons, "season")}
          onChange={handleSeason}
        />
      </div>
      <div>
        <label className="text-xs text-grey-8a block mb-2">Select Race</label>
        <Dropdown
          icon={<FaFlagCheckered size={16} />}
          label="Race"
          options={createDropdownCompatibleData(availableRaces, "schedule")}
          onChange={handleRace}
          loading={loading}
        />
      </div>

      <button
        className="rounded-md  px-6 h-10 ml-4 text-white bg-red"
        type="submit"
        onClick={handleSubmit}
      >
        Go
      </button>
    </form>
  );
};
