import React, { useState } from "react";
import { initialProducts } from "../data/product";
import { Tag } from "lucide-react";

const categories = [
  "All",
  ...new Set(initialProducts.map((cate) => cate.category)),
];
console.log(categories);

const Category = () => {
  const [selectedCategory, setselectedCategory] = useState("Camera");
  return (
    <>
      <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6">
        <Tag className="w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block" />

        {categories.map((item) => (
          <button
            key={item}
            className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md ${selectedCategory === item ? "bg-orange-600 text-white shadow-orange-800/50" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700"}`}
            onClick={() => {
              setselectedCategory(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Category;
