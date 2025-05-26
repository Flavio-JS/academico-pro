import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordFieldProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
}

export const PasswordField = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
          <FontAwesomeIcon icon={faLock} width={20} />
        </div>
        <Input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`pl-10 w-full ${error ? "border-red-300" : ""}`}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            width={20}
          />
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
