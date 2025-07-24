import React from "react";
import TestimonialCard from "./TestimonialCard";
import { tweets } from "../data/tweets";

export const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 bg-gradient-to-b from-slate-900/20 via-slate-900/75 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden">
          {/* Header */}
          <div className="text-center px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 leading-tight">
              Loved by industry leaders and insiders!
            </h2>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:flex lg:justify-center lg:gap-4 xl:gap-6 items-center justify-items-center">
            <img
              src="/images/comp1.png"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
              alt="Company 1 logo"
            />
            <img
              src="/images/comp2.png"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
              alt="Company 2 logo"
            />
            <img
              src="/images/comp3.png"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
              alt="Company 3 logo"
            />
            <img
              src="/images/comp4.png"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
              alt="Company 4 logo"
            />
          </div>

          {/* Part -2 (tweets) */}
          <div className="text-center px-6 sm:px-8 lg:px-12 mt-40 pb-8 sm:pb-12 lg:pb-16">
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400">
              Why they love us?
            </p>
            <p className="text-center mt-6 font-normal text-white">
              See what our users are saying about their experience and how
              <br />
              Onesheet has transformed their workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:auto-rows-fr">
            {tweets.map((tweet) => (
              <TestimonialCard
                key={tweet.id}
                testimonial={tweet.testimonial}
                pfp={tweet.pfp}
                author={tweet.author}
                designation={tweet.designation}
                gridSpan={tweet.gridSpan}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
