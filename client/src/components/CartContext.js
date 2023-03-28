import React, { useState, useEffect, createContext } from "react";

const addCartItem = (cartItems, carData) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === carData._id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === carData._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...carData, quantity: 1 }];
};

const removeCartItem = (cartItems, carData) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === carData._id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem._id !== carData._id);
  }

  return cartItems.map((cartItem) =>
    cartItem._id === carData._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, carData) =>
  cartItems.filter((cartItem) => cartItem._id !== carData._id);

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * cartItem.price.replace(/[^\d]/g, ""),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (carData) => {
    setCartItems(addCartItem(cartItems, carData));
  };

  const removeItemToCart = (carData) => {
    setCartItems(removeCartItem(cartItems, carData));
  };

  const clearItemFromCart = (carData) => {
    setCartItems(clearCartItem(cartItems, carData));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    setCartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
