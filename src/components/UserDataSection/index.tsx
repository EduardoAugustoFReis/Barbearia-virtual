"use client";
import Image from "next/image";
import { UserDataSectionContainer } from "./styles";
import useAuth from "@/context/Auth/useAuth";

export default function UserDataSection() {
  const { user } = useAuth();
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const avatarUrl = user?.avatar
    ? `${baseURL}${user.avatar}`
    : `/placeholder.png`;
  return (
    <UserDataSectionContainer>
      <Image
        className="avatar"
        src={avatarUrl}
        alt="Avatar do usuário"
        height={150}
        width={150}
      />
      <h2>Bem vindo {user?.name}</h2>
      <p>E-mail: {user?.email}</p>
      <p>Telefone: {user?.phone}</p>
    </UserDataSectionContainer>
  );
}
