import React from "react";

export const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-b from-slate-800 to-slate-900/40 border-2 rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="text-center px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-400 leading-tight">
              Loved by industry leaders and insiders!
            </h2>
          </div>

          {/* Company Logos */}
          <div className="px-6 sm:px-8 lg:px-12 py-2 sm:py-4">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:flex md:justify-center lg:gap-4 xl:gap-6 items-center justify-items-center">
              <div className="flex items-center justify-center">
                <img
                  src="/images/comp1.png"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
                  alt="Company 1 logo"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/comp2.png"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
                  alt="Company 2 logo"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/comp3.png"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
                  alt="Company 3 logo"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/comp4.png"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto max-w-full object-contain"
                  alt="Company 4 logo"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center px-6 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-16">
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400">
              Why they love us?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
