"use client";

import { FormEvent, useEffect, useState } from "react";
import Input from "../Input";
import { AppointmentFormContainer } from "./styles";
import { IAppointment, IBaber, IService, ISlot } from "@/types";
import { api } from "@/services/api";
import useAppointment from "@/context/Appointments/useAppointment";

export default function AppointmentForm() {
  const { addAppointment } = useAppointment();

  const [barbers, setBarbers] = useState<IBaber[]>([]);
  const [services, setServices] = useState<IService[]>([]);
  const [availableSlot, setAvailableSlot] = useState<ISlot[]>([]);

  const [selectBarber, setSelectBarber] = useState("");
  const [selectService, setSelectService] = useState("");
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseBarbers = await api.get<IBaber[]>(`/users/barbers`);
        setBarbers(responseBarbers.data);

        const responseService = await api.get<IService[]>(`/services`);
        setServices(responseService.data);
      } catch (error) {
        console.log(
          "Erro ao buscar dados da api - barbeiros e serviços",
          error
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (!selectBarber || !selectService || !date) return;

      try {
        const response = await api.get(
          `appointments/barbers/${selectBarber}/available`,
          { params: { date, serviceId: selectService } }
        );

        console.log("Resposta da API (slots):", response.data);
        setAvailableSlot(response.data.availableSlots);
      } catch (error) {
        console.log("Erro ao buscar horários disponíveis", error);
      }
    };

    fetchAvailableSlots();
  }, [date, selectService, selectBarber]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectBarber || !selectService || !startTime) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const dateFormat = new Date(startTime).toISOString();
      const response = await api.post(
        `/appointments/barbers/${selectBarber}/services/${selectService}`,
        { startTime: dateFormat }
      );

      const createdAppointment = response.data.appointment;

      const appointmentDetails = await api.get<IAppointment>(`/appointments/${createdAppointment.id}`);

      addAppointment(appointmentDetails.data);

      console.log(response.data);
      
      alert("Agendamento concluído com sucesso");

      setSelectBarber("");
      setSelectService("");
      setStartTime("");
      setAvailableSlot([]);
    } catch (error) {
      console.log("Erro ao efetuar agendamento", error);
    }
  };

  return (
    <AppointmentFormContainer onSubmit={handleSubmit}>
      <Input
        id="data"
        label="Selecione a Data"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="barber">Escolha o barbeiro</label>
      <select
        name="barber"
        id="barber"
        value={selectBarber}
        onChange={(e) => setSelectBarber(e.target.value)}
      >
        <option value="">Selecione um barbeiro</option>
        {barbers.map((barber) => (
          <option key={barber.id} value={barber.id}>
            {barber.name}
          </option>
        ))}
      </select>

      <label htmlFor="service">Selecione um serviço</label>
      <select
        name="service"
        id="service"
        value={selectService}
        onChange={(e) => setSelectService(e.target.value)}
      >
        <option value="">Selecione um serviço</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </select>

      <label htmlFor="startTime">Escolha o horário</label>
      <select
        name="startTime"
        id="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      >
        <option value="">Selecione um horário</option>
        {availableSlot.map((slot, index) => {
          const start = new Date(slot.start);
          const end = new Date(slot.end);
          const formattedStart = start.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          });
          const formattedEnd = end.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <option key={index} value={slot.start}>
              {`${formattedStart} - ${formattedEnd}`}
            </option>
          );
        })}
      </select>

      <button type="submit">Agendar</button>
    </AppointmentFormContainer>
  );
}
