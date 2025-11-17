"use client";
import { useEffect } from "react";
import { AppointmentBarberHistoryContainer } from "./styles";
import { IAppointment } from "@/types";
import { api } from "@/services/api";
import useAppointment from "@/context/Appointments/useAppointment";

import { Trash2 } from "@deemlol/next-icons";

export default function AppointmentBarberHistory() {
  const { appointments, setAppointments } = useAppointment();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get<IAppointment[]>(`/appointments/barbers`);
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("erro ao buscar compromissos", error);
      }
    };
    fetchAppointments();
  }, [setAppointments]);

  const handleChangeAppointmentStatus = async (
    id: number,
    statusChanged: "confirmed" | "canceled"
  ) => {
    try {
      await api.patch(`/appointments/${id}`, {
        status: statusChanged,
      });

      setAppointments((prev) =>
        prev.map((appoint) =>
          appoint.id === id ? { ...appoint, status: statusChanged } : appoint
        )
      );
    } catch (error) {
      console.log("erro ao cancelar agendamento", error);
    }
  };

  const handleDeleteAppointment = async (id: number) => {
    const confirmDeleteAppointment = confirm(
      "Tem certeza que deseja excluir esse compromisso? "
    );
    if (!confirmDeleteAppointment) return;
    try {
      await api.delete(`/appointments/${id}`);

      setAppointments((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.log("Erro ao deletar agendamento", error);
    }
  };

  return (
    <AppointmentBarberHistoryContainer>
      {appointments.map((appoint) => {
        const startTime = new Date(appoint.startTime);
        const endTime = new Date(appoint.endTime);

        const startFormatted = startTime.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const endFormatted = endTime.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <div key={appoint.id} className="history">
            <h3>{appoint.service?.name}</h3>
            <p>
              <span>Nome do cliente:</span> {appoint.client?.name}
            </p>
            <p>
              <span>E-mail do cliente:</span> {appoint.client?.email}
            </p>
            <p>
              <span>Telefone do cliente:</span> {appoint.client?.name}
            </p>
            <p>
              <span>Horário:</span> {`${startFormatted} - ${endFormatted}`}
            </p>

            <button
              onClick={() =>
                handleChangeAppointmentStatus(appoint.id, "canceled")
              }
              className="cancelAppointment"
            >
              Cancelar agendamento
            </button>

            <button
              onClick={() =>
                handleChangeAppointmentStatus(appoint.id, "confirmed")
              }
              className="confirmAppointment"
            >
              Confirmar agendamento
            </button>

            <button
              className="deleteAppointment"
              onClick={() => handleDeleteAppointment(appoint.id)}
            >
              <Trash2 size={24} />
            </button>

            <span
              className={`status ${appoint.status}`}
            >
              {appoint.status}
            </span>
          </div>
        );
      })}
    </AppointmentBarberHistoryContainer>
  );
}
