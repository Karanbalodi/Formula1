import { RaceSelection } from "@/components/race-selection/race-selection";
import { Home } from "@/screens/home";
import { SearchParams } from "@/types";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { year, race } = searchParams;
  return (
    <>
      <RaceSelection />
      <Suspense fallback={<div>loading.....</div>}>
        <Home year={year} race={race} />
      </Suspense>
    </>
  );
}
