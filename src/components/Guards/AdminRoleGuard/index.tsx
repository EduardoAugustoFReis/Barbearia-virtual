'use client'
import DashboardCharts from "@/components/DashboardCharts";
import SectionsHome from "@/components/SectionsHome";
import useAuth from "@/context/Auth/useAuth";

export default function AdminRoleGuard() {
  const { user } = useAuth();

  if (!user) return;

  if (user.role !== "admin") return null;

  return (
    <>
      <SectionsHome subtitle="Dados da barbearia">
          <DashboardCharts />
      </SectionsHome>
    </>
  );
}
