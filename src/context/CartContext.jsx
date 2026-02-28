import { createContext, useContext, useState } from "react";

const cartContext = createContext();

import React from "react";
import { initialProducts } from "../data/product";

const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  const products = initialProducts;
  const addCart = (product) => {
    setcart((prevCart) => {
      const existingItem = prevCart.find((item) => {
        item.id == product.id;
      });
      if (existingItem) {
        return prevCart.find((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeCart = (productId, removeAll) => {
    setcart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) {
        return prevCart;
      } else if (removeAll || existingItem.quantity == 1) {
        return prevCart.filter((item) => item.id != productId);
      } else {
        return prevCart.map((item) =>
          item.id == productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  const clearCart = () => setcart([]);
  return (
    <cartContext.Provider value={{ products, addCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;

// No need to use usecontext whenever we want it just call it with this variable:-
export const useCart = () => useContext(cartContext);
