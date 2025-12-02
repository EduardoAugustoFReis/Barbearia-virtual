"use client";

import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { IUser } from "@/types";
import { api } from "@/services/api";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true); // 🔥 novo

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });

      const { user, token } = response.data;

      Cookies.set("token", token, {
        expires: 1,
        sameSite: "lax",
      });

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return null; 
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
