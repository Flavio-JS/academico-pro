export const RememberMe = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
        />
        <label
          htmlFor="remember"
          className="ml-2 block text-sm text-neutral-700"
        >
          Lembrar-me
        </label>
      </div>
      <span className="text-sm text-neutral-700 hover:text-neutral-900 cursor-pointer">
        Esqueceu a senha?
      </span>
    </div>
  );
};
