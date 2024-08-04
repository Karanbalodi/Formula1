"use client";

import { Standings } from "./standings";
import { FastestLap } from "./fastest-lap";

import dynamic from 'next/dynamic'
 
const MapComponent = dynamic(() => import('../map-component/map-component'), {
  ssr: false,
})

export const RaceDetails = () => {
  return (
    <section className="grid grid-cols-3 gap-4 mt-8">
      <MapComponent latitude={45.61} longitude={9.281} />
      <FastestLap />
      <Standings />
    </section>
  );
};
