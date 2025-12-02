"use client";
import useAuth from "@/context/Auth/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface PrivateRoutesProps {
  children: ReactNode;
}

export default function PrivateRoutes({ children }: PrivateRoutesProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    const token = Cookies.get("token");

    if (!token || !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  if (loading) return <p>Carregando...</p>;

  return <>{children}</>;
}
