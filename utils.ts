import {
  nationalityToCountryCode,
  randomColors,
  teamColors,
} from "./constants/constants";
import {
  ConstructorStandings,
  ConstructorStandingsData,
  DriverStandings,
  DriverStandingsData,
  DropdownCompatibleDataLabels,
  LapData,
  LapDetails,
  LapGainersLosers,
  RacingData,
  Schedule,
  Seasons,
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
export const findFastestLap = (raceDetails: Array<RacingData>): LapDetails => {
  const details = raceDetails.find((driver) => driver.FastestLap.rank === "1");
  if (!!details) {
    return createDetails(details);
  }
  return createDetails();

  // const fastestLaps = [];
  // for (let i = 1; i < 4; i++) {
  //   const detail = raceDetails?.find(
  //     (result) => result.FastestLap.rank === String(i)
  //   );
  //   if (!!detail) {
  //     fastestLaps.push(createDetails(detail));
  //   }
  // }
  // return fastestLaps;
};

export const createDetails = (detail?: RacingData): LapDetails => {
  return {
    lap: !!detail ? convertToOrdinal(Number(detail.FastestLap.lap)) : "",
    driver: !!detail
      ? `${detail.Driver.givenName} ${detail.Driver.familyName}`
      : "",
    speed: !!detail ? detail.FastestLap.AverageSpeed.speed : "",
    constructor: !!detail
      ? detail.Constructor
      : { constructorId: "", url: "", name: "", nationality: "" },
    driverNationality: !!detail ? detail.Driver.nationality : "",
    time: !!detail ? convertToMinuteSecond(detail.FastestLap.Time.time) : "",
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

export const loadDriverImage = (driverId: string) => {
  try {
    const url = require(`@/assets/drivers/${driverId}_headshot.webp`);
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

export const isColorAvailable = (name?: string) => {
  if (!!name) {
    return Object.keys(teamColors).includes(name);
  } else {
    return false;
  }
};

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

export const createColorPicker = (
  colorsArray: Array<{ from: string; to: string }>
) => {
  let availableColors = [...colorsArray];
  let constructorMapping: any = {};

  return function pickColor(constructorId?: string) {
    if (constructorId && constructorMapping?.[constructorId]) {
      return constructorMapping?.[constructorId];
    }

    if (availableColors.length === 0) {
      availableColors = [...colorsArray];
    }

    const randomIndex = Math.floor(Math.random() * availableColors.length);

    const pickedColor = availableColors[randomIndex];
    if (constructorId) {
      constructorMapping = {
        ...constructorMapping,
        [constructorId]: pickedColor,
      };
    }

    availableColors.splice(randomIndex, 1);

    return pickedColor;
  };
};

export const createDropdownCompatibleData = (
  options: Array<Seasons | Schedule>,
  type: DropdownCompatibleDataLabels
) => {
  if (type === "season") {
    const dropdownOptions = options.map((option) => ({
      id: option.url,
      displayValue: option.season,
      value: option.season,
    }));
    return dropdownOptions;
  } else {
    const dropdownOptions = options.map((option: any) => ({
      id: option.Circuit.circuitId,
      displayValue: option.raceName,
      value: option.round,
      nation: option.Circuit.Location.country,
    }));
    return dropdownOptions;
  }
};

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  // Define options for formatting
  const options: any = {
    day: "2-digit", // 15
    month: "short", // Aug
    year: "numeric", // 2024
    hour: "2-digit", // 01
    minute: "2-digit", // 00
    hour12: true, // AM/PM
  };

  // Format date
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  // Add suffix to day
  const day = date.getUTCDate();
  const suffix = convertToOrdinal(day);
  const result = `${suffix} ${formattedDate.slice(3)}`;
  return result;
};

export const processLapData = (lapData: any) => {
  const laps = lapData.Races[0].Laps;
  const driverLaps: Record<
    string,
    {
      from: string;
      to: string;
      lapData: Array<{ x: number; y: number; lapTime: string }>;
    }
  > = {};

  const pickColor = createColorPicker(randomColors);

  laps.forEach((lap: any) => {
    lap.Timings.forEach((timing: any) => {
      const driverId = timing.driverId;
      const colors = pickColor();
      if (!driverLaps[driverId]) {
        driverLaps[driverId] = {
          from: colors.from,
          to: colors.to,
          lapData: [],
        };
      }
      driverLaps[driverId].lapData.push({
        x: lap.number,
        y: parseInt(timing.position, 10),
        lapTime: timing.time,
      });
    });
  });

  return driverLaps;
};

export const formatSnakeCase = (snakeStr: string): string => {
  const formattedStr = snakeStr
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return formattedStr;
};

export const convertToTimeFormat = (value: string) => {
  const str = value?.split(":");
  const minute = str?.[0];
  const seconds = str?.[1]?.split(".")?.[0];
  const ms = str?.[1]?.split(".")?.[1];

  return `${minute}m ${seconds}s ${ms}ms`;
};

export function calculateGainersAndLosers(
  currentLap: LapData,
  previousLap: LapData
): Array<LapGainersLosers> {
  const positionChanges = currentLap.Timings.map((driver) => {
    const previousDriver = previousLap.Timings.find(
      (d) => d.driverId === driver.driverId
    );
    let positionChange;
    if (previousDriver) {
      positionChange =
        parseInt(previousDriver.position) - parseInt(driver.position);
    } else {
      positionChange = 0;
    }
    return {
      driverId: driver.driverId,
      currentPosition: driver.position,
      previousPosition: previousDriver ? previousDriver.position : "0",
      positionChange: positionChange,
    };
  });

  const sortedByGains = [...positionChanges].sort(
    (a, b) => b.positionChange - a.positionChange
  );

  return sortedByGains;
}
