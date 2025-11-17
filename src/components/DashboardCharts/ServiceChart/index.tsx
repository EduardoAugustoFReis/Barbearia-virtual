"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTheme } from "styled-components";

interface Props {
  data: { service: string; total: number }[];
}

export default function ServicesChart({ data }: Props) {
    const theme = useTheme();
  
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="service" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill={theme.colorsAppointment.pendingColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
