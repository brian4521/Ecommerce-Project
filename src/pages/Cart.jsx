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
                <span className="text-white">Order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex text-xl justify-between">
                <span>SubTotal :</span>
                <span>Rs {cartTotal} </span>
              </div>
              <div className="flex text-xl justify-between">
                <span>Shipping (Express)</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex pt-6 border-t border-gray-700 justify-between">
                <span className="text-2xl font-extrabold text-white">
                  Estimated Total:
                </span>
                <span className="font-semibold text-orange-400 text-xl">
                  Rs {cartTotal}
                </span>
              </div>
              <div>
                <Link
                  to={"/Checkout"}
                  type="button"
                  class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40"
                >
                  <svg
                    class="w-4 h-4 me-2 -ms-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="bitcoin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z "
                    ></path>
                  </svg>
                  Proceed securely
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
