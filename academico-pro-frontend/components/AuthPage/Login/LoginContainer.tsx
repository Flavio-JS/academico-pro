import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";
import { LoginFooter } from "./LoginFooter";

export const LoginContainer = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};
