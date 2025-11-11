"use client";
import { FormEvent, useState } from "react";
import Input from "../Input";
import { useRouter } from "next/navigation";
import { NewEmployeeForm } from "./styles";
import SelectNewEmployee from "./SelectNewEmployee";
import InputFilePreview from "../InputFilePreview";
import { api } from "@/services/api";

export default function FormNewEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const router = useRouter();

  const handleNewEmployee = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (name.trim()) formData.append("name", name);
      if (email.trim()) formData.append("email", email);
      if (password.trim()) formData.append("password", password);
      if (phone.trim()) formData.append("phone", phone);
      if (role.trim()) formData.append("role", role);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      await api.post(`/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Funcinário cadastrado com sucesso.");
      router.push("/private/home");
    } catch (error) {
      console.error("Erro ao cadastrar funcinário", error.response?.data || error);
    }
  };

  return (
    <NewEmployeeForm onSubmit={handleNewEmployee}>
      <h3>Cadastre um novo funcionário</h3>
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

      <SelectNewEmployee
        id="role"
        label="Função desempenhada: "
        options={["barbeiro", "admin"]}
        value={role}
        onChange={(e) => setRole(e.target.value as "barbeiro" | "admin")}
      />

      <InputFilePreview
        id="avatar"
        label="Selecione a imagem do funcionário"
        onChange={(e) => setAvatar(e.target.files?.[0] || null)}
      />

      <button type="submit">Cadastrar</button>
    </NewEmployeeForm>
  );
}
