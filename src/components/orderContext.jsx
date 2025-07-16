
import { createContext, useContext, useReducer, useEffect } from "react";

const OrderContext = createContext();

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

function orderReducer(state, action) {
  switch (action.type) {
    case "PLACE_ORDER": 
      const updatedOrders = [...state.orders, ...action.payload]
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return {
        ...state,
        orders: updatedOrders,
      };

    default:
      return state;
  }
}

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);


  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(state.orders));
  }, [state.orders]);

  return (
    <OrderContext.Provider value={{ orders: state.orders, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);

