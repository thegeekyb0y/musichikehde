import React from "react";

export const Testimonials = () => {
  return (
    <div>
      <div className="text-2xl md:text-4xl text-center my-12 md:my-32 text-green-400 mx-4 md:mx-20 rounded-3xl border-2  bg-gradient-to-r from-slate-800 to-slate-900/80 border-green-500 font-bold">
        <p className="px-4 pt-4 pb-0 md:p-12">
          Loved by industry leaders and insiders!
        </p>

        {/* Mobile: 2x2 grid, Desktop: single row */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 justify-center items-center px-4 md:px-12">
          <img
            src="/images/comp1.png"
            className="w-24 h-12 md:h-16 md:w-36"
            alt="Company 1"
          />
          <img
            src="/images/comp2.png"
            className="w-24 h-12  md:h-44 md:w-36 flex-shrink-0"
            alt="Company 2"
          />
          <img
            src="/images/comp3.png"
            className="w-24 h-12  md:h-16 md:w-32 flex-shrink-0"
            alt="Company 3"
          />
          <img
            src="/images/comp4.png"
            className="w-24 h-12  md:h-24 md:w-44 "
            alt="Company 4"
          />
        </div>

        <p className="px-4 pt-4 pb-0 md:p-12">Why they love us?</p>
      </div>
    </div>
  );
};

export default Testimonials;
