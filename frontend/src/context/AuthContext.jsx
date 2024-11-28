import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Check if user is already loggedIn
  useEffect(() => {
    const userAlreadyLoggedIn = localStorage.getItem("user");
    if (userAlreadyLoggedIn) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(userAlreadyLoggedIn));
    }
  }, [isAuthenticated]);

  // -----------------Login user--------------------
  //________________________________________________
  const login = async (userData) => {
    setIsLoading(true);
    const response = await axios.post(
      "http://localhost:8000/api/users/login",
      userData
    );

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      setIsAuthenticated(true);
      setCurrentUser(response.data);
      setIsLoading(false);
    }

    return response.data;
  };

  // -----------------Login user--------------------
  //________________________________________________
  const register = async (userData) => {
    setIsLoading(true);
    const response = await axios.post(
      "http://localhost:8000/api/users",
      userData
    );

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(response.data);
      setIsAuthenticated(true);
      setIsLoading(false);
    }

    return response.data;
  };
  // --------------logout user------------------
  //____________________________________________
  const logout = () => {
    const user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        login,
        isAuthenticated,
        logout,
        register,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
