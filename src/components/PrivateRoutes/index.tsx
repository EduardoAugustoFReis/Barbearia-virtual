"use client"
import useAuth from "@/context/Auth/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react"

interface PrivateRoutesProps {
  children: ReactNode;
}

export default function PrivateRoutes({children}: PrivateRoutesProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    } else {
      setLoading(false);
    }
  }, [user, loading, router])

  if (loading) return <p>Carregando...</p>

  return (
    <>{children}</>
  )
}