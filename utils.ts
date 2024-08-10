import { nationalityToCountryCode, teamColors } from "./constants";
import {
  ConstructorStandings,
  ConstructorStandingsData,
  DriverStandings,
  DriverStandingsData,
  LapDetails,
  RacingData,
} from "./types";

export const convertNationalityToCountryCode = (nationality: string) =>
  nationalityToCountryCode[nationality];

export function convertToOrdinal(number: number) {
  if (typeof number !== "number" || number <= 0 || !Number.isInteger(number)) {
    throw new Error("Input must be a positive integer");
  }

  const suffix =
    number % 100 >= 11 && number % 100 <= 13
      ? "th"
      : number % 10 === 1
      ? "st"
      : number % 10 === 2
      ? "nd"
      : number % 10 === 3
      ? "rd"
      : "th";

  return number + suffix;
}
export const findFastestLap = (
  raceDetails: Array<RacingData>
): Array<LapDetails> => {
  const fastestLaps = [];
  for (let i = 1; i < 4; i++) {
    const detail = raceDetails?.find(
      (result) => result.FastestLap.rank === String(i)
    );
    if (!!detail) {
      fastestLaps.push(createDetails(detail));
    }
  }
  return fastestLaps;
};

export const createDetails = (detail?: RacingData): LapDetails => {
  return {
    lap: convertToOrdinal(Number(detail?.FastestLap.lap)),
    driver: `${detail?.Driver.givenName} ${detail?.Driver.familyName}`,
    speed: detail?.FastestLap.AverageSpeed.speed,
    constructor: detail?.Constructor,
    driverNationality: detail?.Driver?.nationality,
    time: convertToMinuteSecond(detail?.FastestLap?.Time?.time),
  };
};

export const convertToMinuteSecond = (timeString?: string) => {
  const minutesSeconds = timeString?.split(".");
  const final = minutesSeconds ? minutesSeconds?.[0]?.split(":") : "";
  return `${final?.[0]}m${final?.[1]}s`;
};

export const createStandingsData = (
  driverStandings: any,
  constructorStandings: any,
  raceDetails: Array<RacingData>
) => {
  const drivers =
    driverStandings?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings?.slice(
      0,
      3
    );
  const constructors =
    constructorStandings?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings?.slice(
      0,
      3
    );

  const driverStandingsData: Array<DriverStandingsData> = [];
  const constructorStandingsData: Array<ConstructorStandingsData> = [];

  drivers?.forEach((driver: DriverStandings) => {
    const change = raceDetails?.find(
      (detail) => detail?.Driver?.driverId === driver?.Driver?.driverId
    );
    driverStandingsData.push({
      name: `${driver?.Driver?.givenName} ${driver?.Driver?.familyName}`,
      subtitle: driver?.Constructors?.[0]?.name,
      nationality: driver?.Driver?.nationality,
      points: driver?.points,
      change: change?.points,
    });
  });

  constructors?.forEach((constructor: ConstructorStandings) => {
    constructorStandingsData.push({
      name: constructor?.Constructor?.name,
      subtitle: constructor?.Constructor?.nationality,
      nationality: constructor?.Constructor?.nationality,
      points: constructor?.points,
    });
  });

  return {
    drivers: driverStandingsData,
    constructors: constructorStandingsData,
  };
};

export const loadDriverImage = (driverName: string) => {
  try {
    const driver = driverName?.toLowerCase()?.replace(/\s+/g, "_");
    const url = require(`@/assets/drivers/${driver}_headshot.webp`);
    return url?.default;
  } catch (e) {
    return require(`@/assets/drivers/default.webp`).default;
  }
};

export const loadConstructorImage = (constructorId: string) => {
  try {
    const url = require(`@/assets/constructors/${constructorId}.webp`);
    return url?.default;
  } catch (e) {
    return require(`@/assets/constructors/default.webp`).default;
  }
};

export const isColorAvailable = (name: string) =>
  Object.keys(teamColors).includes(name);

export const getConstructorRanking = (raceData: Array<RacingData>) => {
  const constructorDetails: { [key: string]: any } = {};

  raceData.forEach((entry) => {
    const constructor = entry.Constructor.name;
    const nationality = entry.Constructor.nationality;
    const points = parseFloat(entry.points);
    const driverName = `${entry.Driver.givenName} ${entry.Driver.familyName}`;

    if (!constructorDetails[constructor]) {
      constructorDetails[constructor] = {
        nationality,
        points: 0,
        drivers: new Set(),
      };
    }

    constructorDetails[constructor].points += points;
    constructorDetails[constructor].drivers.add(driverName);
  });

  const sortedConstructors = Object.entries(constructorDetails)
    .sort(([, a], [, b]) => b.points - a.points)
    .map(([constructor, details]) => ({
      constructor,
      nationality: details.nationality,
      points: details.points,
      drivers: Array.from(details.drivers), // Convert Set to Array
    }));

  return sortedConstructors;
};
