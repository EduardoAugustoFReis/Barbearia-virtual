"use client";

import { FormEvent, useState } from "react";
import Input from "../Input";
import { FormNewServiceContainer } from "./styles";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function FormNewService() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const router = useRouter();

  const handleNewService = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !price || !duration) {
      return alert("Todos os campos precisam ser preenchidos");
    }
    try {
      await api.post("/services", { name, price, duration });

      alert("Serviço cadastrado com sucesso.");
      router.push("/private/home");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao atualizar usuário", error.response?.data);
      } else {
        console.error("Erro inesperado", error);
      }
    }
  };

  return (
    <FormNewServiceContainer onSubmit={handleNewService}>
      <h3>Cadastre um novo serviço</h3>
      <Input
        label="Nome: "
        id="name"
        placeholder="Digite o seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Preço: "
        id="price"
        type="number"
        placeholder="Digite seu e-mail"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Input
        label="Duração: "
        id="duration"
        type="number"
        placeholder="Digite sua senha"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />

      <button type="submit">Cadastrar</button>
    </FormNewServiceContainer>
  );
}
