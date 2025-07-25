export const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-700/40">
      {/* PreFooter */}
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around text-white flex-wrap pt-20 md:pt-30 lg:pt-40">
        <div className="px-2 mb-10 md:mb-0">
          <h2 className="font-medium text-xl md:text-2xl lg:text-3xl text-center md:text-left">
            Join Onesheet to connect
            <br />
            faster, book more, and elevate
            <br />
            your music career
          </h2>
        </div>
        <div className="flex flex-col px-2">
          <p className="text-sm text-center mb-4 text-gray-300">
            Take your music journey to the next level with
            <br />
            tools designed to help you stand out and succeed
          </p>
          <button className="w-72 md:w-80 self-center h-12 rounded-lg px-4 cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium transition-colors">
            Create your first Onesheet now
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around text-white flex-wrap pt-10 md:pt-20 pb-8">
        {/* Logo and Newsletter Section */}
        <div className="flex flex-col px-2 mb-8 md:mb-0">
          <img
            src="/images/logo.png"
            className="w-60 mb-6 self-center md:self-start hover:scale-105 cursor-pointer transition-transform duration-300"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            alt="Onesheet Logo"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            />
            <button className="w-60 md:w-80 h-12 p-4 self-center rounded-xl cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-center text-sm md:font-medium transition-colors whitespace-nowrap">
              Subscribe to Product Updates
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 px-2">
          {/* Website Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Website Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Updates
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-8 md:px-16 lg:px-24 py-6">
        <p className="text-center text-sm text-gray-400">
          Copyright © 2025. Chartmetric. All rights reserved.
        </p>
      </div>
    </div>
  );
};
