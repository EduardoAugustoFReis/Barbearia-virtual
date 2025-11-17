"use client";
import { useEffect } from "react";
import { AppointmentClientHistoryContainer } from "./styles";
import { IAppointment } from "@/types";
import { api } from "@/services/api";
import useAppointment from "@/context/Appointments/useAppointment";
import { Trash2 } from "@deemlol/next-icons";

export default function AppointmentClientHistory() {
  const { appointments, setAppointments, removeAppointment } = useAppointment();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get<IAppointment[]>(`/appointments/client`);
        setAppointments(response.data);
      } catch (error) {
        console.log("erro ao buscar compromissos", error);
      }
    };
    fetchAppointments();
  }, [setAppointments]);

  const handleDeleteAppointment = async (id: number) => {
    const confirmed = confirm(
      "Tem certeza que deseja cancelar esse compromisso ?"
    );
    if (!confirmed) return;
    try {
      await api.delete(`/appointments/${id}`);
      removeAppointment(id);
    } catch (error) {
      console.log("erro ao cancelar agendamento", error);
    }
  };
  return (
    <AppointmentClientHistoryContainer>
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
              <span>Nome do Barbeiro:</span> {appoint.barber?.name}
            </p>
            <p>
              <span>E-mail:</span> {appoint.barber?.email}
            </p>
            <p>
              <span>Telefone:</span> {appoint.barber?.phone}
            </p>
            <p>
              <span>Horário:</span> {`${startFormatted} - ${endFormatted}`}
            </p>

            <button
              className="deleteAppointment"
              onClick={() => handleDeleteAppointment(appoint.id)}
            >
              <Trash2 size={20} />
            </button>

            <span
              className={`status ${appoint.status}`}
            >
              {appoint.status}
            </span>
          </div>
        );
      })}
    </AppointmentClientHistoryContainer>
  );
}
