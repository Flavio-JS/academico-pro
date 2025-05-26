export type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

export type InputFieldProps = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
