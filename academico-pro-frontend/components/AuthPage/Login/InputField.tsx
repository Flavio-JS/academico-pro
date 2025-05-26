import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
}

export const InputField = ({
  label,
  id,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
  onBlur,
  error,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
          {icon}
        </div>
        <Input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`pl-10 w-full ${error ? "border-red-300" : ""}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
