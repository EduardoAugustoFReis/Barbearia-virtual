"use client";
import useAuth from "@/context/Auth/useAuth";
import { MyAccountForm } from "./styles";
import { FormEvent, useState } from "react";
import Input from "../Input";
import InputFilePreview from "../InputFilePreview";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

export default function FormMyAccount() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);


  const handleMyAccount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (name.trim()) formData.append("name", name);
      if (email.trim()) formData.append("email", email);
      if (password.trim()) formData.append("password", password);
      if (phone.trim()) formData.append("phone", phone);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      const response = await api.put(`/users`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });

      alert('Dados atualizado com sucesso.');
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      router.push('/private/home');
    } catch (error: any) {
      console.error("Erro ao atualizar usuário", error.response?.data || error);
    }
  };

  return (
    <MyAccountForm onSubmit={handleMyAccount}>
      <h3>Altere os dados da sua conta</h3>

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

      <InputFilePreview
        id="avatar"
        label="Selecione a imagem do funcionário"
        onChange={(e) => setAvatar(e.target.files?.[0] || null)}
      />

      <button type="submit">Cadastrar</button>
    </MyAccountForm>
  );
}
