/* eslint-disable react/no-children-prop */
import { useForm } from "@tanstack/react-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "./InputField";
import { PasswordField } from "./PasswordField";
import { RememberMe } from "./RememberMe";
import { SubmitButton } from "./SubmitButton";
import { z } from "zod";
import { useAuth } from "@/lib/hooks/useAuth";

export const LoginForm = () => {
  const { signIn, isLoading, error } = useAuth();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: async ({ value }) => {
      await signIn({
        email: value.email,
        password: value.password,
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      {error && (
        <div className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">
          {error}
        </div>
      )}

      <form.Field
        name="email"
        validators={{
          onChange: z
            .string()
            .email("E-mail inválido")
            .min(1, "E-mail é obrigatório"),
        }}
        children={(field) => (
          <InputField
            label="E-mail"
            id={field.name}
            name={field.name}
            type="email"
            placeholder="seu@email.academico"
            icon={<FontAwesomeIcon icon={faEnvelope} width={20} />}
            value={field.state.value}
            onChange={(value) => field.handleChange(value)}
            onBlur={field.handleBlur}
            error={field.state.meta.errors?.[0]?.message}
          />
        )}
      />

      <form.Field
        name="password"
        validators={{
          onChange: z.string().min(1, "Senha é obrigatória"),
        }}
        children={(field) => (
          <PasswordField
            label="Senha"
            id={field.name}
            name={field.name}
            placeholder="Digite sua senha"
            value={field.state.value}
            onChange={(value) => field.handleChange(value)}
            onBlur={field.handleBlur}
            error={field.state.meta.errors?.[0]?.message}
          />
        )}
      />

      <form.Field
        name="remember"
        children={(field) => (
          <RememberMe
            checked={field.state.value}
            onChange={(e) => field.handleChange(e.target.checked)}
          />
        )}
      />

      <SubmitButton disabled={isLoading}>
        {isLoading ? "Entrando..." : "Entrar"}
      </SubmitButton>
    </form>
  );
};
