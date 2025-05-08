import { useState } from "react";
import { academicEvents } from "../mocks/academicEvents.mocks";
import { isSameMonth } from "date-fns";

export const useAcademicCalendar = () => {
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

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
    setSelectedDate(undefined); // Limpa a seleção ao mudar de mês
  };

  return {
    selectedDate,
    setSelectedDate,
    currentMonth,
    hasEvent,
    getEventsForDate,
    getEventsForCurrentMonth,
    handleMonthChange,
  };
};
