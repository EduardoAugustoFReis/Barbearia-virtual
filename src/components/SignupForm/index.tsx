"use client";
import { FormEvent, useState } from "react";
import Input from "../Input";
import { SignupFormContainer } from "./styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      return alert("Os campos precisam ser todos preenchidos.");
    }
    try {
      await api.post("/users", { name, email, password, phone });

      alert('Conta criada com sucesso');
      router.push('/');
    } catch (error) {
      console.log("Erro ao fazer o login", error);
    }
  };

  return (
    <SignupFormContainer onSubmit={handleSignup}>
      <h2>Não tem um conta na Barbearia Virtual?</h2>
      <h3>Crie sua conta</h3>
      <Input
        label="Nome: "
        id="name"
        placeholder="Digite o seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Input
        label="Telefone: "
        id="phone"
        placeholder="Ex: (61) 999999999"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Criar conta</button>

      <Link href={`/`}>Já tem uma conta? Faça o login</Link>
    </SignupFormContainer>
  );
}
