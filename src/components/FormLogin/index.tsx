"use client";
import { useState } from "react";
import Input from "../Input";
import { LoginFormContainer } from "./styles";
import Link from "next/link";
import useAuth from "@/context/Auth/useAuth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try { 
      await login(email, password);
      router.replace("/private/home");
    } catch (error) {
      console.log("Erro ao fazer o login", error);
    }
  }

  return (
    <LoginFormContainer onSubmit={handleLogin}>
      <h2>Bem vindo(a) a Barbearia Virtual</h2>
      <h3>Faça seu login</h3>
      <Input
        label="Email: "
        id="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Senha: "
        id="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Logar</button>

      <Link href={`/signup`}>Não tem uma conta? crie já</Link>

    </LoginFormContainer>
  );
}
