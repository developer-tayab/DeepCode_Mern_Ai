import { useState, createContext } from "react";

const contextApi = createContext();
export default function Context({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [theme, setTheme] = useState("light");
  const value = {
    isAuthenticated,
    setIsAuthenticated,
    theme,
    setTheme,
  };
  return <contextApi.Provider value={value}>{children}</contextApi.Provider>;
}

export { contextApi };
