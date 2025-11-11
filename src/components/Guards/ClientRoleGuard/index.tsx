'use client'
import SectionsHome from "@/components/SectionsHome";
import useAuth from "@/context/Auth/useAuth";

export default function ClientRoleGuard() {
  const { user } = useAuth();

  if (!user) return;

  if (user.role !== "cliente") return null;

  return (
    <>
      <SectionsHome subtitle="Agende seu horário"></SectionsHome>
      <SectionsHome subtitle="Histórico de horários"></SectionsHome>
    </>
  );
}
