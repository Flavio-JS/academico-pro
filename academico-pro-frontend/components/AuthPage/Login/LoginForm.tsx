import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "./InputField";
import { PasswordField } from "./PasswordField";
import { RememberMe } from "./RememberMe";
import { SubmitButton } from "./SubmitButton";

export const LoginForm = ({
  formData,
  showPassword,
  handleChange,
  togglePasswordVisibility,
  handleSubmit,
}: {
  formData: {
    email: string;
    password: string;
    remember: boolean;
  };
  showPassword: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <form id="login-form" className="space-y-6" onSubmit={handleSubmit}>
      <InputField
        id="email"
        name="email"
        type="email"
        placeholder="seu@email.academico"
        icon={<FontAwesomeIcon icon={faEnvelope} width={20} />}
        value={formData.email}
        onChange={handleChange}
      />

      <PasswordField
        showPassword={showPassword}
        value={formData.password}
        onChange={handleChange}
        toggleVisibility={togglePasswordVisibility}
      />

      <RememberMe checked={formData.remember} onChange={handleChange} />

      <SubmitButton />
    </form>
  );
};
