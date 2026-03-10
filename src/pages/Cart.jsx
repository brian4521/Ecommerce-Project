import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Cartitem from "../components/Cartitem";

const Cart = () => {
  const { cart, cartTotal } = useCart();
  console.log("here cart item are: ", cart);
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 pt-8 mb-8">
        <div className="flex items-center mb-3 ">
          <Link
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1"></ChevronLeft>
            <span className="text-white ">Back to home</span>
          </Link>
        </div>
        <h2 className="text-white text-4xl font-extrabold ">
          Shopping Cart - {useCart().cartCount}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Cartitem key={item.id} cartItem={item} />
            ))}
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-400 mr-25">Rs</span>
                <span className="text-white">order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-gray-400">
              <span>SubTotal :</span>
              <span>SubTotal :</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
