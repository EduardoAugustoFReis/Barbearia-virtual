"use client";
import { useEffect, useState } from "react";
import { FetchServicesContainer } from "./styles";
import { IService } from "@/types";
import { api } from "@/services/api";
import { Trash2 } from "@deemlol/next-icons";
import useAuth from "@/context/Auth/useAuth";

export default function FetchServices() {
  const { user } = useAuth();
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get<IService[]>(`/services`);
        setServices(response.data);
      } catch (error) {
        console.log("Erro ao buscar serviço", error);
      }
    };
    fetchServices();
  }, []);

  const handleDeleteService = async (id: number) => {
    const confirmDeleteBarber = confirm(
      "Tem certeza que deseja excluir esse serviço?"
    );
    if (!confirmDeleteBarber) return;
    try {
      await api.delete(`/services/${id}`);

      alert("Serviço excluído com sucesso.");
    } catch (error) {
      console.log("Erro ao excluir barbeiro", error);
    }
  };

  return (
    <FetchServicesContainer>
      {services.map((service) => {
        return (
          <div key={service.id} className="serviceCard">
            {user?.role === "admin" && (
              <button
                className="deleteService"
                onClick={() => handleDeleteService(service.id)}
              >
                <Trash2 size={24} />
              </button>
            )}

            <h3>{service.name}</h3>
            <p>Preço: {service.price} R$</p>
            <p>Duração: {service.duration} minutos</p>
          </div>
        );
      })}
    </FetchServicesContainer>
  );
}
