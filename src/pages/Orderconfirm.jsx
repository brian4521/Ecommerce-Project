import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Orderconfirm = ({ deliveryDetails }) => {
  return (
    <div>
      <div className="container mx-auto md:px8 p-12">
        <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white">
          <CheckCircle className=" w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg " />
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Order Confirmed
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Your transaction is complete. A confirmation email has been to your
            gmail account
          </p>
          <div className="p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm">
            <p className="font-semibold text-lg mb-1">
              {deliveryDetails?.name}
            </p>
            <p>
              {deliveryDetails.address},{deliveryDetails.city},
              {deliveryDetails.zip}
            </p>
          </div>
          <div className="mt-3">
            <Link to={"/"}>
              <button className="w-full  py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition active:scale-95 shadow-lg shadow-orange-900/20">
                Continue shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderconfirm;
