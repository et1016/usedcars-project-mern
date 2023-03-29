import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, carData) => {
  const newCartItems = addCartItem(cartItems, carData);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, carData) => {
  const newCartItems = removeCartItem(cartItems, carData);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, carData) => {
  const newCartItems = clearCartItem(cartItems, carData);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addLocalCartItem = (cartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};
