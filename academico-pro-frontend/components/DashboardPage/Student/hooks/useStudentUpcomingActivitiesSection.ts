import { useMemo } from "react";
import { upcomingAssignments } from "../mocks/upcomingAssignments.mocks";
import { enrolledCourses } from "../mocks/enrolledCourses.mocks";
import { cn } from "@/lib/utils";
import { Assignment } from "../types/Assignment.types";

export const useStudentUpcomingActivitiesSection = () => {
  const activities = useMemo(() => {
    return upcomingAssignments.map((assignment) => {
      const course = enrolledCourses.find(
        (c) => c.code === assignment.courseId
      );
      const daysLeft = Math.ceil(
        (assignment.dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      );

      return {
        id: assignment.id,
        courseName: course?.name || assignment.courseId,
        title: assignment.title,
        dueDate: assignment.dueDate.toLocaleDateString(),
        daysLeft,
        status: assignment.status,
      };
    });
  }, []);

  /**
   * Returns a CSS class string for styling a badge that indicates the urgency of a deadline
   * based on the number of days left.
   *
   * @param daysLeft - The number of days remaining until the deadline. A value of 0 or less
   * indicates the deadline has passed.
   * @returns A string representing the CSS classes to be applied for styling the badge.
   * The badge color changes depending on the urgency:
   * - Red: 0 or fewer days left (deadline passed or today).
   * - Red: 1 to 3 days left.
   * - Yellow: 4 to 7 days left.
   * - Green: More than 7 days left.
   */
  function getDeadlineBadgeClass(daysLeft: number) {
    return cn(
      "text-xs px-2 py-0.5 rounded-full",
      daysLeft <= 0
        ? "bg-red-100 text-red-800"
        : daysLeft <= 3
        ? "bg-red-100 text-red-800"
        : daysLeft <= 7
        ? "bg-yellow-100 text-yellow-800"
        : "bg-green-100 text-green-800"
    );
  }

  /**
   * Returns a CSS class string for styling a badge that represents the status
   * of an assignment.
   *
   * @param status - The current status of the assignment. Can be one of:
   * "pending", "submitted", "late", or "graded".
   * @returns A string representing the CSS classes to be applied for styling
   * the badge. The badge color changes depending on the assignment status:
   * - Yellow: "pending"
   * - Blue: "submitted"
   * - Red: "late"
   * - Green: "graded"
   */
  function getAssignmentStatusClass(status: Assignment["status"]) {
    return cn(
      "text-sm px-3 py-1 rounded-full whitespace-nowrap",
      status === "pending" && "bg-yellow-100 text-yellow-800",
      status === "submitted" && "bg-blue-100 text-blue-800",
      status === "late" && "bg-red-100 text-red-800",
      status === "graded" && "bg-green-100 text-green-800"
    );
  }

  /**
   * Returns a human-readable label for the given assignment status.
   *
   * @param status - The current status of the assignment. Can be one of:
   * "pending", "submitted", "late", or "graded".
   * @returns A string representing the assignment status, translated to
   * Portuguese. If the status is unknown, returns "Desconhecido".
   */
  function getAssignmentStatusLabel(status: Assignment["status"]) {
    switch (status) {
      case "pending":
        return "Pendente";
      case "submitted":
        return "Enviado";
      case "late":
        return "Atrasado";
      case "graded":
        return "Avaliado";
      default:
        return "Desconhecido";
    }
  }

  return {
    activities,
    getDeadlineBadgeClass,
    getAssignmentStatusClass,
    getAssignmentStatusLabel,
  };
};
