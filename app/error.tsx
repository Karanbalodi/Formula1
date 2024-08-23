"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";

export default function Error({ error }: { error: Error }) {
  if (error.message.includes("50")) {
    return (
      <div className="relative h-screen flex justify-center items-center -mx-8 -px-8">
        <FlickeringGrid className="h-screen w-screen" />
        <div className="absolute flex flex-col items-center">
          <h1 className="font-f-bold text-9xl text-red">
            {error.message?.split(":")?.[0]}
          </h1>
          <p className="text-lg">
            Ergast server returned internal server error. Please Try again after
            some time
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen flex justify-center items-center -mx-8 -px-8">
      <FlickeringGrid className="h-screen w-screen" />
      <div className="absolute flex flex-col items-center">
        <h1 className="font-f-bold text-lg text-red">
          Some error occured. Please try again
        </h1>
      </div>
    </div>
  );
}
