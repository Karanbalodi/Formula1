"use client";

import React, { FC, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapComponentProps } from "@/types";
import { mapOptions } from "@/constants/constants";

const MapComponent: FC<MapComponentProps> = ({ latitude, longitude }) => {
  const [mapLoading, setMapLoading] = useState(true);

  return (
    <div className="relative">
      {mapLoading && (
        <div
          role="status"
          className={`absolute w-full h-[250px] animate-pulse z-[9999]`}
        >
          <div className="rounded-md w-full h-full bg-gray-200" />
        </div>
      )}
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: "250px", width: "100%" }}
        {...mapOptions}
        className="rounded-md"
        whenReady={() => {
          setMapLoading(false);
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
