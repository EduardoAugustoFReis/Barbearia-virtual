"use client";

import { theme } from "@/styles/theme";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  data: { status: string; total: number }[];
}

const COLORS = [
  `${theme.colorsAppointment.confirmedColor}`,
  `${theme.colors.error}`,
  `${theme.colorsAppointment.pendingColor}`,
]; // completed, canceled, pending

export default function StatusChart({ data }: Props) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="status"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
