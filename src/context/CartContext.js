import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  displayCart: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cartItems];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("here");
      if (index > -1) {
        updatedCart[index].quantity += 1;
      } else {
        updatedCart.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
        displayCart: true,
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const removedItemTotal = removedItem
        ? removedItem.price * removedItem.quantity
        : 0;

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: state.totalItems - removedItem.quantity,
        totalPrice: state.totalPrice - removedItemTotal,
      };
    }
    case "TOGGLE_CART_DISPLAY": {
      return {
        ...state,
        displayCart: !state.displayCart,
      };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
