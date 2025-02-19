import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "../context/Context";
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(contextApi); // Mock authentication state

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to home if not authenticated
    }
  }, [isAuthenticated, navigate]); // ✅ Now it only runs when `isAuthenticated` changes

  return isAuthenticated ? children : null;
}
