"use client"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Esse contexto só deve ser usado com o provider respectivo");
  }

  return context;
}