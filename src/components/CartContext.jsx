import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./authentification/Auth";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      { const existing = state.cart.find(
        item => item.id === action.payload.id && item.userId === action.payload.userId
      );

      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && item.userId === action.payload.userId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      } }
        case "REMOVE_ITEM":
          return {
            ...state,
            cart: state.cart.filter(
              item => !(item.id === action.payload.id && item.userId === action.payload.userId)
            )
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
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useAuth();
  
  useEffect(() => {
    const syncCart = async () => {
      if (!user) return;
 
      try {
        const res = await axios.get(`http://localhost:5000/cart?userId=${user.id}`);
        for (const item of res.data) {
          await axios.delete(`http://localhost:5000/cart/${item.id}`);
        }
 
        for (const item of state.cart) {
          await axios.post("http://localhost:5000/cart", {
            ...item,
            userId: user.id,
          });
        }
      } catch (err) {
        console.error("❌ Error syncing cart:", err);
      }
    };
 
    syncCart();
  }, [state.cart, user]);

  const userCart = user
    ? state.cart.filter(item => item.userId === user.id)
    : [];
 
  const value = { cart: userCart, dispatch };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart =() => {
  return useContext(CartContext);
}
