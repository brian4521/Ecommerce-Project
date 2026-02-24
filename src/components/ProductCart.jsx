import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="max-w-sm bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-orange-500/50 transition-all duration-300 group">
        {/* Image Area with Link */}
        <Link
          to="/productdetail"
          className="relative block h-48 overflow-hidden"
        >
          <img
            src={product.image}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            alt={product.title}
          />

          {/* High-End Glass Price Tag */}
          <div className="absolute bottom-0 left-0 bg-gray-900/60 backdrop-blur-md text-orange-500 px-4 py-1.5 text-lg font-bold rounded-tr-2xl border-t border-r border-white/10">
            Rs{product.price}
          </div>
        </Link>

        {/* Content Area - OUTSIDE the image link */}
        <div className="p-5">
          <h5 className="text-xl font-bold text-white mb-2 truncate">
            {product.name}
          </h5>
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="mb-3">
            <button type="button" class="btn btn-light">
              {product.category}
            </button>
          </div>

          <button className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition active:scale-95 shadow-lg shadow-orange-900/20">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
