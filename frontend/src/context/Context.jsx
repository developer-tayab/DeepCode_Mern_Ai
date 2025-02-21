import { useState, createContext, useEffect } from "react";

const contextApi = createContext();

export default function Context({ children }) {
  // Load stored authentication state on mount with a safe fallback
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  // Load user information safely
  const [userInformation, setUserInformation] = useState(() => {
    try {
      const storedUser = localStorage.getItem("userInformation");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing userInformation from localStorage:", error);
      return null; // Return null if there's an error
    }
  });

  // Load and persist theme preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Save authentication state & user info when changed
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (userInformation) {
      localStorage.setItem("userInformation", JSON.stringify(userInformation));
    } else {
      localStorage.removeItem("userInformation");
    }
  }, [userInformation]);

  // Save theme preference when changed
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    userInformation,
    setUserInformation,
    theme,
    setTheme,
  };

  return <contextApi.Provider value={value}>{children}</contextApi.Provider>;
}

export { contextApi };
