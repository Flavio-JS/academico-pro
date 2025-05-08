export type CourseMaterial = {
  id: string;
  name: string;
  type: "pdf" | "link" | "book" | "video";
  url: string;
};
