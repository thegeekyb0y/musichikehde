import React from "react";
import { tweets } from "../data/tweets";

const TestimonialCard = ({
  testimonial,
  pfp,
  author,
  designation,
  gridSpan,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg border-2 border-dashed border-white/50 p-6 ${
        gridSpan || ""
      }`}
    >
      <p className="text-slate-300 italic">"{testimonial}"</p>
      <div className="mt-4 flex items-center">
        <img src={pfp} alt={author} className="h-12 w-12 rounded-full" />
        <div className="ml-4">
          <p className="font-semibold text-slate-100">{author}</p>
          <p className="text-sm text-slate-400">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
