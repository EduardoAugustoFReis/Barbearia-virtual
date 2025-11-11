"use client";
import useAuth from "@/context/Auth/useAuth";
import { MenuContainer } from "./styles";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleMenuNavigation = (path: string) => {
    router.replace(path);
  };

  return (
    <MenuContainer>
      <button onClick={logout}>logout</button>
      <button onClick={() => handleMenuNavigation(`/private/myAccount`)}>
        Minha Conta
      </button>
      {user?.role === "admin" && (
        <button onClick={() => handleMenuNavigation(`/private/newEmployee`)}>
          Criar funcionário
        </button>
      )}
      {user?.role === "admin" && (
        <button onClick={() => handleMenuNavigation(`/private/newService`)}>
          Criar Serviço
        </button>
      )}
    </MenuContainer>
  );
}
