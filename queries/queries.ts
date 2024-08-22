import { COUNTRY_API, ERGAST_API, ERGAST_API_BACKUP } from "@/config";
import { HomeProps } from "@/types";

export async function getAvailableSeasons() {
  const res = await fetch(`${ERGAST_API}/seasons.json?limit=200`);

  if (res.status !== 200) {
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  const {
    MRData: {
      SeasonTable: { Seasons },
    },
  } = await res.json();

  return Seasons;
}

// Using proxy to avoid CORS error
export async function getAvailableRacesInSeason(season?: string) {
  const res = await fetch(`${ERGAST_API}/${season}.json`);

  if (res.status !== 200) {
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  const {
    MRData: {
      RaceTable: { Races },
    },
  } = await res.json();

  return Races;
}

export async function getRecentRaceData() {
  const res = await fetch(`${ERGAST_API}/current/last/results.json`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  const {
    MRData: {
      RaceTable: { Races },
    },
  } = await res.json();
  return Races[0];
}

export async function getDriverRanking(season?: string, round?: string) {
  const res = await fetch(
    `${ERGAST_API}/${season}/${round}/driverStandings.json`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  return res.json();
}

export async function getConstructorRanking(season?: string, round?: string) {
  const res = await fetch(
    `${ERGAST_API}/${season}/${round}/constructorStandings.json`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  return res.json();
}

export async function getCountry(code: string) {
  const res = await fetch(`${COUNTRY_API}/alpha/${code}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  return res.json();
}

export async function getRaceData({ season, round }: HomeProps) {
  const res = await fetch(
    `${ERGAST_API}/${season}/${round}/results.json`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  const {
    MRData: {
      RaceTable: { Races },
    },
  } = await res.json();
  return Races[0];
}

export async function getLapChartData(season?: string, round?: string) {
  const res = await fetch(
    `${ERGAST_API}/${season}/${round}/laps.json?limit=3000`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  const response = await res.json();
  return response.MRData.RaceTable;
}

export const getPitStopData = async (season?: string, round?: string) => {
  const res = await fetch(
    `${ERGAST_API}/${season}/${round}/pitstops.json?limit=3000`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status}: Failed to fetch data`, {
      cause: res.status,
    });
  }

  const response = await res.json();
  return response.MRData.RaceTable?.Races?.[0]?.PitStops;
};
