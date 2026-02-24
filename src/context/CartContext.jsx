import { createContext, useContext } from "react";

const cartContext = createContext();

import React from "react";
import { initialProducts } from "../data/product";

const CartContextProvider = ({ children }) => {
  const products = initialProducts;
  return (
    <cartContext.Provider value={{ products }}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;

// No need to use usecontext whenever we want it just call it with this variable:-
export const useCart = () => useContext(cartContext);
