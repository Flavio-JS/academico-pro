"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useAcademicCalendar } from "./hooks/useAcademicCalendar";

// Dados de exemplo (substitua pelos seus dados reais)

export const AcademicCalendar = () => {
  const {
    hasEvent,
    selectedDate,
    setSelectedDate,
    handleMonthChange,
    getEventsForDate,
    currentMonth,
    getEventsForCurrentMonth,
  } = useAcademicCalendar();

  // Estilos para os modificadores
  const modifiers = {
    hasEvent,
  };

  const modifiersStyles = {
    hasEvent: {
      borderBottom: "2px solid #3b82f6",
    },
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
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
