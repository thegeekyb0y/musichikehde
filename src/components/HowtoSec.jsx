import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  Palette,
  Layout,
  Target,
  Users,
  Sparkles,
  Share2,
  Brush,
} from "lucide-react";

export const HowtoSec = () => {
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleImages((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setImageRef = (index) => (el) => {
    imageRefs.current[index] = el;
  };

  return (
    <div className="rounded-2xl md:mx-20 mx-2 p-8 md:mt-10 mt-80 bg-gradient-to-r from-slate-900 to-emerald-500">
      <section className="min-h-screen flex justify-center text-white">
        <div className="text-center w-full max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How do you design a Onesheet?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A step-by-step guide to creating a professional and impactful
            onesheet
          </p>
          <div className="text-center mb-12 mt-6">
            <button className="relative overflow-hidden border border-green-100 bg-neutral-700/80 px-3 cursor-pointer text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full  before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-center rounded-md py-1">
              <div className="relative z-10 px-4 py-2 text-xl">
                Try it Yourself?
              </div>
            </button>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Card 1 - Sign Up */}
            <div
              className="md:col-span-1 md:row-span-1
            bg-slate-800 border border-emerald-300/80 rounded-xl p-6 hover:scale-105
            transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <div className="flex flex-col h-full ">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-400 text-xs font-semibold">
                    01
                  </span>
                  <FileText className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl text-left font-bold mb-1 text-emerald-100">
                  Sign Up
                </h3>
                <p className="text-slate-300 text-left text-sm leading-relaxed mb-4">
                  Create your account to get started with our platform.
                </p>
                <img
                  ref={setImageRef(0)}
                  src="/images/step0.png"
                  className={`rounded-xl transition-all duration-700 ease-out ${
                    visibleImages.has(0)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  alt="Sign Up Step"
                />
              </div>
            </div>

            {/* Card 2 - Choose Template (Large) */}
            <div className="md:col-span-2 md:row-span-1 bg-slate-800 border border-emerald-300/80 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="flex flex-col h-full ">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-400 text-xs font-semibold">
                    02
                  </span>
                  <Layout className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl text-left font-bold mb-1 text-emerald-100">
                  Choose Your Template
                </h3>
                <p className="text-slate-300 text-left text-sm mb-3 leading-relaxed">
                  Select from our collection of professionally designed
                  templates.
                </p>
                <img
                  ref={setImageRef(1)}
                  src="/images/step1.jpg"
                  className={`rounded-xl transition-all duration-700 ease-out delay-100 ${
                    visibleImages.has(1)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  alt="Choose Template Step"
                />
              </div>
            </div>

            {/* Card 3 - Preview (Large) */}
            <div className="md:col-span-2 md:row-span-1 bg-slate-800 border border-emerald-300/80 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="flex flex-col h-full ">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-400 text-xs font-semibold">
                    05
                  </span>
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl text-left font-bold mb-1 text-emerald-100">
                  Preview & Review
                </h3>
                <p className="text-slate-300 text-left text-sm mb-3 leading-relaxed">
                  Check your onesheet before finalizing and sharing it.
                </p>
                <img
                  ref={setImageRef(2)}
                  src="/images/step2.jpg"
                  className={`rounded-xl transition-all duration-700 ease-out delay-200 ${
                    visibleImages.has(2)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  alt="Preview Step"
                />
              </div>
            </div>

            {/* Card 4 - Share (Small) */}
            <div className="md:col-span-1 md:row-span-1 bg-slate-800 border border-emerald-300/80 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <div className="flex flex-col h-full ">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-400 text-xs font-semibold">
                    06
                  </span>
                  <Share2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg text-left font-bold mb-1 text-emerald-100">
                  Share & Export
                </h3>
                <p className="text-slate-300 text-left text-sm mb-3 leading-relaxed">
                  Download or share your professional onesheet.
                </p>
                <div className="flex-grow flex items-center">
                  <img
                    ref={setImageRef(3)}
                    src="/images/step2.png"
                    className={`rounded-xl w-full bg-green-500/70 transition-all duration-700 ease-out delay-300 ${
                      visibleImages.has(3)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    alt="Share and Export"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
