"use client";
import useAuth from "@/context/Auth/useAuth";
import { MenuContainer } from "./styles";
import { useRouter } from "next/navigation";
import { X } from "@deemlol/next-icons";

type MenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function Menu({ open, onClose }: MenuProps) {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleMenuNavigation = (path: string) => {
    router.replace(path);
  };

  return (
    <MenuContainer open={open}>
       <button className="close" onClick={onClose}>
        <X size={28} />
      </button>

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
