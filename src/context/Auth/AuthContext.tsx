import { IUser } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface createContextProps {
  user: IUser| null;  
  setUser: Dispatch<SetStateAction<IUser | null>>
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<createContextProps | undefined>(undefined);