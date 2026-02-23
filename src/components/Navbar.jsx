import React from "react";
import { House } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl px-7 shadow-gray-950/70 border-b border-orange-900 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <House className="w-8 h-8 text-orange-500 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold tracking-widest uppercase ">
                MT<span className="text-orange-400">STORE</span>
              </h1>
            </div>
          </Link>
          <nav flex items-center space-x-6>
            <Link to={"/cart"} className="relative p-3cursor-pointer">
              <ShoppingCart className="w-8 h-8" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
