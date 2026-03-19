import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Package, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Orderconfirm from "./Orderconfirm";

const Checkout = () => {
  const [deliveryDetails, setdeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const { clearCart, cartTotal, cart } = useCart();
  const [isConfirmed, setisConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const onSumbitDetails = (e) => {
    e.preventDefault();
    clearCart();
    setisConfirmed(true);
  };

  console.log("delivery details", deliveryDetails);

  if (isConfirmed) {
    return <Orderconfirm deliveryDetails={deliveryDetails}></Orderconfirm>;
  }
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 ">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight mt-4">
          Finalize order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4">
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
              <MapPin className="w-7 h-7 text-orange-500 "></MapPin>
              <span className="text-orange-400 ">Shipping Information</span>
            </h3>
            <form action="" className="space-y-6" onSubmit={onSumbitDetails}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                  >
                    {key === "zip" ? "pin code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    name={key}
                    id={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder:gray-500"
                  />
                </div>
              ))}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition active:scale-95 shadow-lg shadow-orange-900/20"
                >
                  Pay And Confirm Order
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-3 border-b border-y-gray-700 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-400 mr-25">Rs</span>
                <span className="text-white">Order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-gray-400 mb-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-base border-b border-gray-800 pb-2 "
                >
                  <span className="trucate text-gray-300">{item.name}</span>
                  <span className="font-medium text-orange-300">
                    Rs {item.price * item.quantity}
                  </span>
                </div>
              ))}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
