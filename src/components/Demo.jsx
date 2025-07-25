import React from "react";
import { cards } from "../data/artistcards";
import { ArtistCard } from "./ArtistCard";

export const Demo = () => {
  const marqueeItems = [...cards, ...cards, ...cards];
  return (
    <div className="text-white h-screen bg-slate-900 pt-8 md:pt-24">
      <div className="rounded-2xl mx-4 md:mx-20 lg:mx-32 bg-gradient-to-b from-emerald-900 to-emerald-500 border-1 border-green-400">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-medium pt-12">
          Top Artist Picks
        </h1>
        <p className="text-sm lg:xl text-center font-medium py-4 text-slate-300">
          Experience actual onesheets below. Click to view!
        </p>
        <div className="overflow-hidden py-12">
          <div className="flex w-max gap-4 animate-[scroll-left_30s_linear_infinite] cursor-pointer hover:[animation-play-state:paused]">
            {marqueeItems.map((sheet, index) => (
              <ArtistCard key={index} pfp={sheet.pfp} author={sheet.author} />
            ))}
          </div>
          <div className="pb-10" />
        </div>
      </div>
    </div>
  );
};
