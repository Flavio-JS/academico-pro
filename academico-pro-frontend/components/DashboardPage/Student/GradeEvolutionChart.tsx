"use client";

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { ChartContainer, ChartTooltip } from "../../ui/chart";

const gradeEvolutionChartConfig = {
  "Cálculo I": {
    label: "Cálculo I",
    color: "#3b82f6",
  },
  "Física I": {
    label: "Física I",
    color: "#ef4444",
  },
  "Álgebra Linear": {
    label: "Álgebra Linear",
    color: "#10b981",
  },
  "Programação I": {
    label: "Programação I",
    color: "#f59e0b",
  },
  ECC: {
    label: "ECC",
    color: "#713f12",
  },
  "Arquitectura de Software": {
    label: "Arquitectura de Software",
    color: "#22d3ee",
  },
} as const;

// Mock de dados para o gráfico de evolução de notas
const gradeEvolutionData = [
  {
    name: "Jan",
    "Cálculo I": 5.5,
    "Física I": 6.2,
    "Álgebra Linear": 7.0,
    "Programação I": 7.8,
    ECC: 6.9,
    "Arquitectura de Software": 7.5,
  },
  {
    name: "Fev",
    "Cálculo I": 6.0,
    "Física I": 5.4,
    "Álgebra Linear": 7.5,
    "Programação I": 6.2,
    ECC: 5.5,
    "Arquitectura de Software": 8.0,
  },
  {
    name: "Mar",
    "Cálculo I": 5.8,
    "Física I": 6.1,
    "Álgebra Linear": 6.8,
    "Programação I": 5.2,
    ECC: 6.0,
    "Arquitectura de Software": 6.9,
  },
  {
    name: "Abr",
    "Cálculo I": 6.5,
    "Física I": 6.9,
    "Álgebra Linear": 7.1,
    "Programação I": 6.0,
    ECC: 6.3,
    "Arquitectura de Software": 7.8,
  },
  {
    name: "Mai",
    "Cálculo I": 6.8,
    "Física I": 7.4,
    "Álgebra Linear": 6.5,
    "Programação I": 7.0,
    ECC: 6.7,
    "Arquitectura de Software": 8.5,
  },
];

export const GradeEvolutionChart = () => {
  return (
    <Card className="p-0">
      <CardHeader>
        <CardTitle>Evolução das Notas</CardTitle>
        <CardDescription>
          Progresso das suas notas ao longo do semestre
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={gradeEvolutionChartConfig} className="w-full">
          <LineChart
            data={gradeEvolutionData}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: -5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <ChartTooltip />
            <Legend />
            <Line type="monotone" dataKey="Cálculo I" stroke="#3b82f6" />
            <Line type="monotone" dataKey="Física I" stroke="#ef4444" />
            <Line type="monotone" dataKey="Álgebra Linear" stroke="#10b981" />
            <Line type="monotone" dataKey="Programação I" stroke="#f59e0b" />
            <Line type="monotone" dataKey="ECC" stroke="#14b8a6" />
            <Line
              type="monotone"
              dataKey="Arquitectura de Software"
              stroke="#a855f7"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
