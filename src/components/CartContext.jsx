/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      
      // eslint-disable-next-line no-case-declarations
      const Existing = state.cart.find(item=> item.id === action.payload.id)
      if (Existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
      case "CLEAR_CART":
        return{
          ...state,
          cart :[]
        };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = { cart: state.cart, dispatch };
  return <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>;
};

export function useCart() {
  return useContext(CartContext);
}