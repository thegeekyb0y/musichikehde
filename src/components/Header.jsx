import React, { useState } from "react";
import { AudioLines, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-stone-600/65 border-2 border-color3 h-16 p-2 mt-4 lg:mx-26 flex gap-2 mx-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md rounded-xl text-amber-50">
      <div className="ml-4 cursor-pointer self-center shrink-0">
        <AudioLines />
      </div>
      <h2 className=" cursor-pointer self-center font-bold text-white">
        {" "}
        MusicHiKehde
      </h2>
      <div className="gap-5 mx-auto items-center hidden lg:flex">
        <button className="hover:opacity-60 cursor-pointer ">Explore</button>
        <button className="hover:opacity-60 cursor-pointer">Features</button>
        <button className="cursor-pointer hover:opacity-60">
          How it Works?
        </button>
        <button className="hover:opacity-60 cursor-pointer ">Pricing</button>
        <button className="hover:opacity-60 cursor-pointer">Updates</button>
        <button className="cursor-pointer hover:opacity-60">FAQ</button>
      </div>
      <div className="self-center flex gap-4">
        <button className="relative overflow-hidden border border-green-100 hidden lg:block bg-white/20 px-3 mr-auto cursor-pointer text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-left rounded-md py-1">
          <span className="relative z-10">SignIn</span>
        </button>
        <button className="relative overflow-hidden border border-green-100 hidden lg:block bg-green-800/90 px-3 mr-auto cursor-pointer text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-left rounded-md py-1">
          <span className="relative z-10">SignUp</span>
        </button>
      </div>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden cursor-pointer ml-auto"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute top-16 left-0 right-0  bg-green-500/75 p-4 flex flex-col gap-4 rounded-2xl lg:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <button className="hover:opacity-60 px-2 cursor-pointer text-left">
          Explore
        </button>
        <button className="hover:opacity-60 px-2 cursor-pointer text-left">
          Features
        </button>
        <button className="cursor-pointer px-2 hover:opacity-60 text-left">
          How it Works
        </button>
        <button className="hover:opacity-60 px-2 cursor-pointer text-left">
          Pricing
        </button>
        <button className="hover:opacity-60 px-2 cursor-pointer text-left">
          Updates
        </button>
        <button className="cursor-pointer px-2 hover:opacity-60 text-left">
          FAQ
        </button>
        <div className="flex gap-5 mr-auto">
          <button className="relative overflow-hidden border border-green-100 bg-white px-3 mr-auto cursor-pointer text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-zinc-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-left rounded-md py-2">
            <span className="relative z-10">Signup</span>
          </button>
          <button className="relative overflow-hidden border border-green-100 bg-white px-3 mr-auto cursor-pointer text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-zinc-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full text-left rounded-md py-2">
            <span className="relative z-10">Signin</span>
          </button>
        </div>
      </div>
    </div>
  );
};
