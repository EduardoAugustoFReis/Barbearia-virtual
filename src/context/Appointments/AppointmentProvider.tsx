import { ReactNode, useEffect, useState } from "react";
import { AppointmentContext } from "./AppointmentContext";
import { IAppointment } from "@/types";
import { api } from "@/services/api";

type AppointmentProvide = {
  children: ReactNode;
};

export default function AppointmentProvider({ children }: AppointmentProvide) {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const fetchAppointments = async () => {
    const response = await api.get<IAppointment[]>(`/appointments/client`);
    setAppointments(response.data);
  };

  const removeAppointment = (id: number) => {
    setAppointments((prev) => prev.filter((appoint) => appoint.id !== id));
  };

  const addAppointment = (appoint: IAppointment) => {
    setAppointments((prev) => [...prev, appoint]);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        setAppointments,
        fetchAppointments,
        removeAppointment,
        addAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
