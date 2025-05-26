import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const PasswordField = ({
  showPassword,
  value,
  onChange,
  toggleVisibility,
}: {
  showPassword: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVisibility: () => void;
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor="password" className="block text-sm text-neutral-700">
        Senha
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
          <FontAwesomeIcon icon={faLock} width={20} />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Digite sua senha"
          value={value}
          onChange={onChange}
          className="pl-10 w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 text-neutral-700 focus:border-neutral-500"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
          onClick={toggleVisibility}
        >
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} width={20} />
          ) : (
            <FontAwesomeIcon icon={faEye} width={20} />
          )}
        </button>
      </div>
    </div>
  );
};
