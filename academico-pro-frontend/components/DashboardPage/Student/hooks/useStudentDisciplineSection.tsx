import { useMemo } from "react";
import { enrolledCourses } from "../mocks/enrolledCourses.mocks";
import { courseMaterials } from "../mocks/courseMaterials.mocks";
import { cn } from "@/lib/utils";
import { CourseMaterial } from "../types/CourseMaterial.types";
import { BookOpen, FileText, LinkIcon, Video } from "lucide-react";

export const useStudentDisciplineSection = () => {
  const disciplines = useMemo(() => {
    return enrolledCourses.map((course) => ({
      ...course,
      materials: courseMaterials[course.code] || [],
    }));
  }, []);

  /**
   * Returns a CSS class string for styling a badge that represents the status
   * of an enrolled course.
   *
   * @param status - The current status of the course. Can be one of:
   * "Cursando", "Concluído", or "Trancado".
   * @returns A string representing the CSS classes to be applied for styling
   * the badge. The badge color changes depending on the course status:
   * - Blue: "Cursando"
   * - Green: "Concluído"
   * - Yellow: "Trancado"
   */
  function getCourseStatusClass(status: string) {
    return cn(
      "text-sm px-3 py-1 rounded-full",
      status === "Cursando" && "bg-blue-100 text-blue-800",
      status === "Concluído" && "bg-green-100 text-green-800",
      status === "Trancado" && "bg-yellow-100 text-yellow-800"
    );
  }

  /**
   * Returns a JSX Element that represents an icon for a given course material
   * type. The icon is null if the type is not recognized.
   *
   * @param type - The type of course material. Can be one of:
   * "pdf", "link", "book", "video".
   * @returns A JSX Element with the corresponding icon for the type.
   */
  function getMaterialIcon(type: CourseMaterial["type"]): JSX.Element | null {
    switch (type) {
      case "pdf":
        return <FileText size={14} />;
      case "link":
        return <LinkIcon size={14} />;
      case "book":
        return <BookOpen size={14} />;
      case "video":
        return <Video size={14} />;
      default:
        return null;
    }
  }

  return {
    disciplines,
    getCourseStatusClass,
    getMaterialIcon,
  };
};
