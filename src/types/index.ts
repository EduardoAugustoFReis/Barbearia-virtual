export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role : "admin" | "barbeiro" | "cliente";
  avatar: string | null;
};

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IService {
  id: number;
  name: string;
  price: number;
  duration: number;
  userId: number;
}

export interface IBaber {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
}

export interface IClient {
  id: number;
  name: string;
  email: string;
  phone: string;
} 

export interface IAppointment {
  id: number;
  barberId: number;
  clientId: number;
  serviceId: number;
  barber: IBaber | null;   
  service: IService | null; 
  client: IClient | null;
  startTime: string; // vem em ISO string do backend
  endTime: string;
  status: "pending" | "confirmed" | "canceled"; 
  createdAt: string;
  updatedAt: string;
}

export interface ISlot {
  start: string;
  end: string;
}
