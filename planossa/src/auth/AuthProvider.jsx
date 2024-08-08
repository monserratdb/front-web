import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { getUserById } from "../services/api";

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  const [userId, setUserId] = useState(localStorage.getItem("user_id") || null);

  useEffect(() => {
    if (token) {
      console.log("Token encontrado:", token);
      localStorage.setItem("token", token);
      const fetchUserRole = async () => {
        try {
          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          const userId = decodedToken.sub;
          console.log("User ID encontrado:", userId);
          const response = await getUserById(userId, token);
          const userRole = response.data.role;
          console.log("Rol del usuario:", userRole);
          setRole(userRole);
          setUserId(userId);
          localStorage.setItem("role", userRole);
          localStorage.setItem("user_id", userId);
        } catch (error) {
          console.error("Error al obtener el rol del usuario:", error);
          setRole(null);
          setUserId(null);
          localStorage.removeItem("role");
          localStorage.removeItem("user_id");
        }
      };
      fetchUserRole();
    } else {
      console.log("No se encontró token, removiendo role");
      setRole(null);
      setUserId(null);
      localStorage.removeItem("role");
      localStorage.removeItem("user_id");
    }
  }, [token]);

  function logout() {
    setToken(null);
    setRole(null);
    setUserId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
  }

  return (
    <AuthContext.Provider value={{ token, setToken, role, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
