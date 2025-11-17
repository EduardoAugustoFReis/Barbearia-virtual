"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTheme } from "styled-components";

interface Props {
  data: { barber: string; total: number }[];
}

export default function BarbersChart({ data }: Props) {
  const theme = useTheme();
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="barber" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill={theme.colorsAppointment.confirmedColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
