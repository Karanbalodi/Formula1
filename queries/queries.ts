import { COUNTRY_API, ERGAST_API } from "@/config";

export async function getRecentRaceData() {
  const res = await fetch(`${ERGAST_API}/current/last/results.json`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getDriverRanking(year: string, round: string) {
  const res = await fetch(
    `${ERGAST_API}/${year}/${round}/driverStandings.json`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getConstructorRanking(year: string, round: string) {
  const res = await fetch(
    `${ERGAST_API}/${year}/${round}/ConstructorStandings.json`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export async function getCountry(code: string) {
  const res = await fetch(`${COUNTRY_API}/alpha/${code}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}