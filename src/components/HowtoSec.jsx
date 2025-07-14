import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export const HowtoSec = () => {
  useScrollReveal();
  return (
    <div className="rounded-2xl scroll-reveal opacity-0 -translate-y-8 transition-all duration-1500 md:mx-20 mx-2 p-8 bg-gradient-to-r from-slate-900 to-emerald-500 ">
      <section className="h-screen md:mt-10 mt-80 flex  justify-center text-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How do you design a Onesheet?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A step-by-step guide to creating a professional and impactful
            onesheet
          </p>
          <div className="text-center mt-6">
            <button className="relative overflow-hidden border border-green-100 bg-neutral-700/80 px-3 cursor-pointer text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-center rounded-md py-1">
              <div className="relative z-10 px-4 py-2 text-2xl">
                Try it Yourself?
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
