"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

interface Appointment {
  barber: { id: number; name: string };
  service: { id: number; name: string };
  startTime: string;
  status: string;
}

export default function useAppointmentStats() {
  const [loading, setLoading] = useState(true);
  const [barbers, setBarbers] = useState<{ barber: string; total: number }[]>([]);
  const [services, setServices] = useState<{ service: string; total: number }[]>([]);
  const [status, setStatus] = useState<{ status: string; total: number }[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const response = await api.get<Appointment[]>("/appointments");
        const appointments = response.data;

        // ===== 1. BARBEIROS MAIS AGENDADOS =====
        const barberCount: Record<string, number> = {};
        appointments.forEach((a) => {
          const name = a.barber?.name || "Desconhecido";
          barberCount[name] = (barberCount[name] || 0) + 1;
        });

        const barberData = Object.entries(barberCount).map(([barber, total]) => ({
          barber,
          total,
        }));

        // ===== 2. SERVIÇOS MAIS AGENDADOS =====
        const serviceCount: Record<string, number> = {};
        appointments.forEach((a) => {
          const serviceName = a.service?.name || "Serviço desconhecido";
          serviceCount[serviceName] = (serviceCount[serviceName] || 0) + 1;
        });

        const servicesData = Object.entries(serviceCount).map(([service, total]) => ({
          service,
          total,
        }));

        // ===== 3. STATUS =====
        const statusCount: Record<string, number> = {};
        appointments.forEach((a) => {
          const st = a.status || "undefined";
          statusCount[st] = (statusCount[st] || 0) + 1;
        });

        const statusData = Object.entries(statusCount).map(([status, total]) => ({
          status,
          total,
        }));

        // salvar
        setBarbers(barberData);
        setServices(servicesData);
        setStatus(statusData);
      } catch (error) {
        console.error("Erro ao carregar estatísticas: ", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { loading, barbers, services, status };
}
