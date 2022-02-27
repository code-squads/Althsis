import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [entityInfo, setEntityInfo] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Pull saved login state from localStorage
    const authToken = localStorage.getItem("authToken");
  }, []);

  const login = (pk, authorityType, entityInfo) => {
    if (loggedIn) {
      console.log("Already logged in !");
      return false;
    }

    setLoggedIn(true);
    return true;
  };

  const logout = () => {
    if (!loggedIn) {
      console.log("Already logged out !");
      return false;
    }

    // Update login status in the context
    setData(undefined);
    setEntityInfo(undefined);
    setLoggedIn(false);
    return true;
  };

  const contextValue = {
    loggedIn,
    entityInfo,
    data,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
