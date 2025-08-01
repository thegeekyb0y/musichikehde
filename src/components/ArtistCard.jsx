import React from "react";
import { cards } from "../data/artistcards";
export const ArtistCard = ({ pfp, author }) => {
  return (
    <div className="min-w-[200px] md:min-w-[220px] bg-white rounded-xl overflow-hidden shadow-lg text-black hover:scale-105 duration-400 ease-in-out">
      <img
        src={pfp}
        alt={author}
        className="w-full h-36 md:h-52 object-cover "
      />
    </div>
  );
};
