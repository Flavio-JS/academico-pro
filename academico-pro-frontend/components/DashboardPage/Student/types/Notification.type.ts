import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export type Notification = {
  id: number;
  type: string;
  message: string;
  date: string;
  icon: IconDefinition;
};
