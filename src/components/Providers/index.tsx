"use client";
import AppointmentProvider from "@/context/Appointments/AppointmentProvider";
import AuthProvider from "@/context/Auth/AuthProvider";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </AppointmentProvider>
    </AuthProvider>
  );
}
