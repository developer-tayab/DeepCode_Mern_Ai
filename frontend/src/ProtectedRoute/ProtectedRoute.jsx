import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Redirect to home if not authenticated
    }
  }, [isAuthenticated, navigate]); // ✅ Now it only runs when `isAuthenticated` changes

  return isAuthenticated ? children : null;
}
