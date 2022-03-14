import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    const found = items.find((item) => item.id === id);
    return found;
  };

  const addItem = (item, qty) => {
    isInCart(item.id)
      ? setItems(
          items.map((prod) => {
            if (prod.id === item.id) {
              prod.qty += item.qty;
            }
            return prod;
          })
        )
      : setItems([...items, { id: item.id, title: item.title, qty: qty }]);
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
