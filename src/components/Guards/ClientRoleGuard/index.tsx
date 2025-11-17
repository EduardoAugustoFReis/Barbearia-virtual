'use client'
import AppointmentForm from "@/components/AppointmentForm";
import AppointmentHistory from "@/components/AppointmentClientHistory";
import SectionsHome from "@/components/SectionsHome";
import useAuth from "@/context/Auth/useAuth";

export default function ClientRoleGuard() {
  const { user } = useAuth();

  if (!user) return;

  if (user.role !== "cliente") return null;

  return (
    <>
      <SectionsHome subtitle="Agende seu horário">
        <AppointmentForm />
      </SectionsHome>
      <SectionsHome subtitle="Histórico de horários">
        <AppointmentHistory />
      </SectionsHome>
    </>
  );
}
