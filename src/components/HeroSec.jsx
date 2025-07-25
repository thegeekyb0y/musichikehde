import { Verified } from "lucide-react";
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const HeroSec = () => {
  useScrollReveal();
  return (
    <div
      id="top"
      className="relative scroll-reveal opacity-0 -translate-y-8 transition-all duration-1500"
    >
      <div className="flex mt-12 md:mt-16 gap-2 justify-center px-4 py-2 mx-auto bg-gradient-to-r from-gray-500 via-green-500 to-emerald-400 rounded-xl w-fit border-2 border-green-500 ">
        <div className="self-center">
          <Verified size={16} color="white" />
        </div>
        <div className="self-center text-xs md:text-lg text-center text-white">
          Trusted by over 50k+ Musicians worldwide.
        </div>
      </div>

      <div className="text-center text-green-400 p-8">
        <h1 className="font-semibold leading-tight">
          {/* Mobile: smaller text, single line is fine */}
          <span className="block md:hidden text-3xl mt-2 sm:text-4xl">
            Make Music that goes Viral in just few clicks!!
          </span>

          {/* Desktop: larger text, forced 2-line layout */}
          <span className="hidden md:block space-y-2">
            <span className="block text-5xl lg:text-6xl">
              Make Music that goes Viral
            </span>
            <span className="block text-5xl lg:text-6xl">
              in just few Clicks!!!
            </span>
          </span>
        </h1>
      </div>

      <p className="text-center text-lg md:text-xl mx-auto px-4 text-green-200/80">
        Onesheet is your all-in-one artist profile <br />
        Present your music and share your stats with the industry.
      </p>

      <div className="text-center mt-6">
        <button className="relative overflow-hidden border border-green-100 bg-neutral-700/80 px-3 cursor-pointer text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-center rounded-md py-1">
          <div className="relative z-10 px-4 py-2">Try it Out!</div>
        </button>
      </div>

      {/* Main Hero Section with Floating Widgets */}
      <div className="relative mt-16 mb-20 px-4 w-sm max-w-full md:w-2xl lg:w-4xl mx-auto min-h-[60px]">
        {/* Main Hero Image - Centered */}
        <div className="relative z-10 flex justify-center">
          <img
            src="/images/heroimg3.png"
            className="transform hover:rotate-0 transition-transform duration-500 border-2 border-green-500 rounded-2xl shadow-2xl max-w-4xl w-full"
            alt="Hero"
          />
        </div>

        {/* Floating Widget 1 - Top Left with Arrow */}
        <div className="absolute top-3 lg:top-8 -left-4 lg:-left-4 z-20 ease-in-out duration-200">
          <div className="relative">
            {/* Your widget image */}
            <img
              src="/images/widget2.png"
              alt="Live Stats Widget"
              className=" rotate-x-12 w-24 md:w-40 lg:w-60 rotate-y-10 h-auto shadow-2xl shadow-black hover:scale-105 transition-transform duration-300"
            />

            {/* Arrow pointing to main image */}
            <div className="absolute -bottom-2 right-8">
              <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-green-500 rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Floating Widget 2 - Bottom Right */}
        <div className="absolute right-2 top-36 md:top-60 lg:top-75 lg:-right-20 z-20">
          <div className="relative">
            <img
              src="/images/widget1.png"
              alt="Additional Widget"
              className="w-24 md:w-48 lg:w-72 h-auto rotate-x-12 rotate-y-10 shadow-2xl shadow-black rounded-xl hover:scale-105 transition-transform duration-300 border-1 drop-shadow-xl drop-shadow-green-500/20 border-green-300"
            />

            <div className="absolute -top-2 left-8">
              <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-green-500 -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
