'use client'
import SectionsHome from "@/components/SectionsHome";
import useAuth from "@/context/Auth/useAuth";

export default function BarberRoleGuard() {
  const { user } = useAuth();

  if (!user) return;

  if (user.role !== "barbeiro") return null;

  return (
    <>
      <SectionsHome subtitle="Histórico de horários"></SectionsHome>
    </>
  );
}
