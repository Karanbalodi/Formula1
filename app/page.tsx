import { Suspense } from "react";
import { Home } from "@/screens/home";
import { SearchParams } from "@/types";
import { RaceSelection } from "@/components/race-selection/race-selection";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import { AiOutlineFrown } from "react-icons/ai";

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { season, round } = searchParams;
  return (
    <>
      <div className="hidden md:block">
        <RaceSelection selectedSeason={season} />
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
      </div>
      <div className="block md:hidden relative h-screen flex justify-center items-center -mx-8 -px-8">
        <FlickeringGrid className="h-screen w-screen" />
        <div className="absolute flex flex-col items-center">
          <AiOutlineFrown size={80} className="text-red" />
          <h1 className="font-f-bold text-md text-red mt-6">
            We are not available for mobile right now
          </h1>
        </div>
      </div>
    </>
  );
}
