import React from "react";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";

import { useCart } from "../context/CartContext";
import ProductCart from "../components/ProductCart";
const Productlist = () => {
  console.log(useCart());
  const { products } = useCart();
  console.log(products);
  return (
    <>
      <div className="mx-auto container px-4 md:px-8 pt-8 ">
        <Searchbar />
        <Category />
        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-8 pt-4 text-white">
          Featured Gear {products.length} items
        </h2>

        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center mt-4">
          {products.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productlist;
