"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isSameMonth } from "date-fns";

type AcademicEvent = {
  date: Date;
  title: string;
  description: string;
  type: "holiday" | "exam" | "deadline" | "event";
};

// Dados de exemplo (substitua pelos seus dados reais)
const toDay = new Date();

const academicEvents: AcademicEvent[] = [
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 3),
    title: "Último dia para trancamento",
    description: "Prazo final para trancamento de disciplinas",
    type: "deadline",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 7),
    title: "Semana de Provas",
    description: "Período de avaliações do bimestre",
    type: "exam",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 14),
    title: "Feriado - Dia de Algum feriado",
    description: "Não haverá aula",
    type: "holiday",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 14),
    title: "Deadline",
    description: "Prazo final para trancamento de disciplinas",
    type: "deadline",
  },
  {
    date: new Date(toDay.getFullYear(), toDay.getMonth(), 14),
    title: "Evento",
    description: "Descrição do evento",
    type: "event",
  },
];

export const AcademicCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Função para verificar se uma data tem evento
  const hasEvent = (date: Date) => {
    return academicEvents.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Função para obter os eventos de uma data específica
  const getEventsForDate = (date: Date) => {
    return academicEvents.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Função para obter todos os eventos do mês atual
  const getEventsForCurrentMonth = () => {
    return academicEvents
      .filter((event) => isSameMonth(event.date, currentMonth))
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  // Estilos para os modificadores
  const modifiers = {
    hasEvent,
  };

  const modifiersStyles = {
    hasEvent: {
      borderBottom: "2px solid #3b82f6",
    },
  };

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
    setSelectedDate(undefined); // Limpa a seleção ao mudar de mês
  };

  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        className="rounded-md border w-min h-min"
        onMonthChange={handleMonthChange}
      />

      <div className="flex-1">
        {selectedDate ? (
          <>
            <h3 className="font-medium mb-2">
              Eventos em {format(selectedDate, "dd/MM/yyyy")}
            </h3>
            <div className="space-y-4">
              {getEventsForDate(selectedDate).length > 0 ? (
                getEventsForDate(selectedDate).map((event, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <div className="p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                              {format(event.date, "dd")}
                            </span>
                            <span className="text-xs text-gray-400">
                              {format(event.date, "EEE")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                event.type === "holiday"
                                  ? "bg-red-500"
                                  : event.type === "exam"
                                  ? "bg-yellow-500"
                                  : event.type === "deadline"
                                  ? "bg-blue-500"
                                  : "bg-green-500"
                              }`}
                            />
                            <h4 className="font-medium">{event.title}</h4>
                          </div>
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-600">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span>{format(event.date, "dd/MM/yyyy")}</span>
                          <span>•</span>
                          <span className="capitalize">{event.type}</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  Nenhum evento marcado para esta data.
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <h3 className="font-medium mb-2">
              Eventos em {format(currentMonth, "MMMM yyyy")}
            </h3>
            <div className="space-y-4">
              {getEventsForCurrentMonth().length > 0 ? (
                getEventsForCurrentMonth().map((event, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <div className="p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">
                              {format(event.date, "dd")}
                            </span>
                            <span className="text-xs text-gray-400">
                              {format(event.date, "EEE")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                event.type === "holiday"
                                  ? "bg-red-500"
                                  : event.type === "exam"
                                  ? "bg-yellow-500"
                                  : event.type === "deadline"
                                  ? "bg-blue-500"
                                  : "bg-green-500"
                              }`}
                            />
                            <h4 className="font-medium">{event.title}</h4>
                          </div>
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-600">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span>{format(event.date, "dd/MM/yyyy")}</span>
                          <span>•</span>
                          <span className="capitalize">{event.type}</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  Nenhum evento marcado para este mês.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
