import { Suspense } from "react";
import { Home } from "@/screens/home";
import { SearchParams } from "@/types";
import { RaceSelection } from "@/components/race-selection/race-selection";

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
        fallback={
          <div role="status" className="w-full animate-pulse">
            <p className="rounded-md bg-gray-200 w-96 h-10 mt-6" />
            <p className="rounded-md h-6 bg-gray-200 mt-2 w-60" />
            <p className="rounded-md h-6 bg-gray-200 mt-2 w-60" />
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="rounded-md w-full h-60 bg-gray-200" />
              <div className="rounded-md w-full h-60 bg-gray-200" />
              <div className="rounded-md w-full h-60 bg-gray-200" />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="rounded-md w-full h-60 bg-gray-200" />
              <div className="rounded-md w-full h-60 bg-gray-200" />
              <div className="rounded-md w-full h-60 bg-gray-200" />
            </div>
          </div>
        }
      >
        <Home season={season} round={round} />
      </Suspense>
    </>
  );
}
