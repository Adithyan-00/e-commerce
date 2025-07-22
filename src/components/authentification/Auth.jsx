
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: !!localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user")),
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload)); 
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user"); 
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
