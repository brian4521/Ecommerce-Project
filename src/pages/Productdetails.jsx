import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialProducts } from "../data/product";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import { Zap } from "lucide-react";

const Productdetails = () => {
  let { id } = useParams();
  const [product, setproduct] = useState();
  console.log(initialProducts);
  console.log(id);
  useEffect(() => {
    setproduct(initialProducts.find((obj) => obj.id == id));
  }, [id]);
  console.log(product);
  if (!product) {
    return <div className="text-white">Loading...</div>;
  } else {
    return (
      <>
        <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
          <Link to={"/"}>
            <button className="cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg ">
              <ChevronLeft className="w-6 h-6 mr-1" />
              Back to All Products
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-2  ">
            <div className="">
              <img
                src={product.image}
                alt={product.name}
                className="w-100 h-125 object-cover  rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"
              />
            </div>
            <div className="flex flex-col justify-between px-4">
              <div>
                <h1 className="texr-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
                  {product.name}
                </h1>
              </div>
              <div>
                <p className="text-3xl  font-extrabold text-orange-400 mb-4">
                  Rs{product.price}
                </p>
                <h2 className="text-xl fon text-gray-200 mb-2 border-b border-e-orange-900/50 pb-2 flex items-center space-x-2 ">
                  <Tag className="text-white" />
                  <span className="text-white"> Product Overview</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-3">
                  {product.description}
                </p>
                <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <li className="flex items-center space-x-3 text-lg">
                    <Zap className="w-5 h-5  text-orange-500" />
                    <span>
                      Premium quality you can feel from the first use.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg">
                    <Zap className="w-5 h-5  text-orange-500" />
                    <span>
                      Engineered for reliability and professional results.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg">
                    <Zap className="w-5 h-5  text-orange-500" />
                    <span>
                      Guaranteed durability and customer satisfaction.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full  py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition active:scale-95 shadow-lg shadow-orange-900/20">
                  Add to Cart
                </button>
              </div>
              <div className="mt-3">
                <Link to={"/"}>
                  <button
                    type="button"
                    class=" py-3 w-full btn btn-outline-warning"
                  >
                    More Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Productdetails;
