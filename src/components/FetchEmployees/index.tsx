"use client";
import { useEffect, useState } from "react";
import { FetchBarbersContainer } from "./styles";
import { IBaber } from "@/types";
import { api } from "@/services/api";
import Image from "next/image";
import { Trash2 } from "@deemlol/next-icons";
import useAuth from "@/context/Auth/useAuth";

export default function FetchBarbers() {
  const { user } = useAuth();
  const [barbers, setBarbers] = useState<IBaber[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await api.get<IBaber[]>(`/users/barbers`);

        setBarbers(response.data);
      } catch (error) {
        console.log("Erro ao buscar barbeiros", error);
      }
    };
    fetchBarbers();
  }, []);

  const handleDeleteBarber = async (id: number) => {
    const confirmDeleteBarber = confirm(
      "Tem certeza que deseja excluir esse barbeiro?"
    );
    if (!confirmDeleteBarber) return;
    try {
      await api.delete(`/users/${id}`);

      alert("Barbeiro excluído com sucesso.");
    } catch (error) {
      console.log("Erro ao excluir barbeiro", error);
    }
  };

  return (
    <FetchBarbersContainer>
      {barbers.map((barber) => {
        const avatarUrl = `${baseUrl}${barber.avatar}`;

        return (
          <div key={barber.id} className="barbersCard">
            {user?.role === "admin" && (
              <button
                className="deleteBarber"
                onClick={() => handleDeleteBarber(barber.id)}
              >
                <Trash2 size={24} />
              </button>
            )}

            <Image
              src={avatarUrl}
              height={150}
              width={150}
              alt="Imagem do barbeiro"
            />
            <h3>{barber.name}</h3>
            <p>{barber.email}</p>
            <p>{barber.phone}</p>
          </div>
        );
      })}
    </FetchBarbersContainer>
  );
}
