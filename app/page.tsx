import { Suspense } from "react";
import { Home } from "@/screens/home/home";
import { SearchParams } from "@/types";
import { RaceSelection } from "@/components/race-selection/race-selection";
import { LoadingHome } from "@/screens/home/loading-home";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { season, round } = searchParams;
  return (
    <>
      <RaceSelection />
      <Suspense
        fallback={<LoadingHome />}
      >
        <Home season={season} round={round} />
      </Suspense>
    </>
  );
}
