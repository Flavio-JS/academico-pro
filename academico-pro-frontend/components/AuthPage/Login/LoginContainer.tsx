"use client";

import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";
import { LoginFooter } from "./LoginFooter";
import { useLogin } from "./hooks/useLogin";

export const LoginContainer = () => {
  const {
    formData,
    showPassword,
    handleChange,
    togglePasswordVisibility,
    handleSubmit,
  } = useLogin();

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <LoginHeader />
      <LoginForm
        formData={formData}
        showPassword={showPassword}
        handleChange={handleChange}
        togglePasswordVisibility={togglePasswordVisibility}
        handleSubmit={handleSubmit}
      />
      <LoginFooter />
    </div>
  );
};
