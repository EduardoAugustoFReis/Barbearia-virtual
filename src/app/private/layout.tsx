import PrivateRoutes from "@/components/PrivateRoutes";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({children}: PrivateLayoutProps) {
  return (
    <PrivateRoutes>{children}</PrivateRoutes>
  )
}