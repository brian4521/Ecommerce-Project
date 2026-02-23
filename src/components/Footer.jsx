import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-900 border-t border-gray-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side: Brand/Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-600 rounded-md flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <p className="text-gray-400 text-sm tracking-tight">
              © 2026 <span className="text-white font-medium">MT STORE</span>.
              All rights reserved.
            </p>
          </div>

          {/* Right side: Simple Navigation */}
          <nav className="flex items-center gap-8 text-sm font-medium text-gray-500">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Github
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
