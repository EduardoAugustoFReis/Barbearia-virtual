import { IAppointment } from "@/types";
import { createContext } from "react";

type AppointmentContextProps = {
  appointments: IAppointment[];
  setAppointments: React.Dispatch<React.SetStateAction<IAppointment[]>>;
  fetchAppointments: () => Promise<void>;
  removeAppointment: (id: number) => void;
  addAppointment: (appoint: IAppointment) => void;
}

export const AppointmentContext = createContext<AppointmentContextProps | undefined>(undefined);