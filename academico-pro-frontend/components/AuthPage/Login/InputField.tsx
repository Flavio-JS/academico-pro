import { InputFieldProps } from "./types/Login.types";

export const InputField = ({
  id,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm text-neutral-700">
        {name === "email" ? "E-mail" : "Senha"}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pl-10 w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 text-neutral-700 focus:ring-neutral-500 focus:border-neutral-500"
        />
      </div>
    </div>
  );
};
