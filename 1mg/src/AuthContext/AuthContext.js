import React, { createContext, useState } from "react";
export const Auth_Context = createContext();
const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Auth_Context.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </Auth_Context.Provider>
  );
};

export default AuthContext;
