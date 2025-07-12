/* src/components/Card.jsx */
import React from "react";

const Card = ({
  number,
  upperSubCaption,
  title,
  description,
  color,
  textColor,
  imageSrc,
  imageAlt,
}) => (
  <div
    className={`${color} ${textColor} w-full mt-52 md:mt-0 max-w-5xl mx-6 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden`}
  >
    <span className="absolute top-1 right-8 text-6xl md:text-8xl font-bold opacity-20 select-none">
      {number}
    </span>

    <div className="relative z-10 flex flex-col md:flex-row gap-8">
      {/* LEFT : copy  */}
      <div className="md:flex-1 mt-3">
        <p className="uppercase tracking-widest text-sm mb-2 opacity-60">
          {upperSubCaption}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* RIGHT : illustration */}
      <div className="md:flex-1 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full hover:scale-110 mt-3 transition-all ease-in-out h-64 max-w-md object-contain"
        />
      </div>
    </div>

    {/* translucent blobs */}
    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full" />
    <div className="absolute -top-10 -left-10 w-20 h-20 bg-white opacity-10 rounded-full" />
  </div>
);

export default Card;
