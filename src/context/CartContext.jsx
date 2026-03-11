import { createContext, useContext, useMemo, useState } from "react";

const cartContext = createContext();

import React from "react";
import { initialProducts } from "../data/product";

const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  const products = initialProducts;
  const addCart = (product) => {
    console.log(product);
    setcart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id == product.id); //always use return in {}
      if (existingItem) {
        return prevCart.map((item) =>
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

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  console.log("selected product", cart);
  return (
    <cartContext.Provider
      value={{
        products,
        addCart,
        removeCart,
        clearCart,
        cartCount,
        cartTotal,
        cart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;

// No need to use usecontext whenever we want it just call it with this variable:-
export const useCart = () => useContext(cartContext);
