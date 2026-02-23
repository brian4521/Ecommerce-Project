import React from "react";
import { Search } from "lucide-react";
const Searchbar = () => {
  return (
    <>
      <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-2xl border border-y-gray-800">
        <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800">
          <Search className="ml-4 my-3" />
          <input
            type="text"
            className="w-full bg-transparent border-none px-4 py-3 text-white focus:outline-none text-xl"
            placeholder="Enter the product name"
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
