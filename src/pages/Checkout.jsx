import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Package, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [deliveryDetails, setdeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 ">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
          Finalize order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
              <MapPin className="w-7 h-7 text-orange-500 "></MapPin>
              <span className="text-orange-400 ">Shipping Information</span>
            </h3>
            <form action="" className="space-y-6">
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
                    required
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder:gray-500"
                  />
                </div>
              ))}
              <div className="pt-6">
                <Link to={"/Checkout"}>
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition active:scale-95 shadow-lg shadow-orange-900/20"
                  >
                    Pay And Confirm Order
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
