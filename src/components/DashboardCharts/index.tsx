"use client";

import useAppointmentStats from "@/hooks/useAppointmentStats";
import BarbersChart from "./BarbersChart";
import ServicesChart from "./ServiceChart";
import StatusChart from "./StatusChart";
import { DashboardChartsContainer } from "./styles";

export default function DashboardCharts() {
  const { loading, barbers, services, status } = useAppointmentStats();

  if (loading) return <p>Carregando estatísticas...</p>;

  return (
    <DashboardChartsContainer>
      <section>
        <h3>Barbeiros mais agendados</h3>
        <BarbersChart data={barbers} />
      </section>

      <section>
        <h3>Serviços mais agendados</h3>
        <ServicesChart data={services} />
      </section>

      <section>
        <h3>Status dos compromissos</h3>
        <StatusChart data={status} />
      </section>
    </DashboardChartsContainer>
  );
}
