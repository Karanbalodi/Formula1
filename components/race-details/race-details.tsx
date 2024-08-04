"use client";

import MapComponent from "../map-component/map-component";
import { Standings } from "./standings";
import { FastestLap } from "./fastest-lap";

export const RaceDetails = () => {
  return (
    <section className="grid grid-cols-3 gap-4 mt-8">
      <MapComponent latitude={"45.61"} longitude={"9.281"} />
      <FastestLap />
      <Standings />
    </section>
  );
};
