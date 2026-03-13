import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ChevronLeft, Zap, X } from "lucide-react";

//learn from mistake: casesensitive props passed cartItem props recieved CartItem, make sure to return after using array method
const Cartitem = ({ cartItem }) => {
  const { addCart, removeCart } = useCart();

  return (
    <div className="flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50">
      <div className="flex items-center space-x-4 w-full sm:w-auto justify-center">
        <img
          src={cartItem.image}
          alt="image"
          className="w-24 h-24 rounded-lg object-cover border-2 border-gray-700"
        />
        <div>
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {cartItem.name}
          </h3>
          <p className="text-lg  text-orange-400 font-semibold">
            Rs {cartItem.price}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center border border-gray-700 rounded full overflow-hidden shadow-lg ">
            <button
              onClick={() => removeCart(cartItem.id)}
              className="p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 items-center not-visited:justify-center"
            >
              -
            </button>
            <span className="px-3 text-base font-bold text-white bg-gray-800">
              {cartItem.quantity}
            </span>
            <button
              onClick={() => addCart(cartItem)}
              className="p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 items-center not-visited:justify-center"
            >
              +
            </button>
          </div>
          <div>
            <p className="text-white text-xl inline mr-3">
              Rs {cartItem.price * cartItem.quantity}
            </p>
            <button className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 ml-2 ">
              <X onClick={() => removeCart(cartItem.id, true)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
