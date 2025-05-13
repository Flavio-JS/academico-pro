import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SemesterSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="2025.1" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2025.1">2025.1</SelectItem>
        <SelectItem value="2024.2">2024.2</SelectItem>
        <SelectItem value="2024.1">2024.1</SelectItem>
      </SelectContent>
    </Select>
  );
}
