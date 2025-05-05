import { faEnvelope, faEye } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main
      id="login-page"
      className="flex items-center justify-center w-full h-[800px] bg-neutral-50"
    >
      <div
        id="login-container"
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <div id="login-header" className="text-center mb-8">
          <div className="bg-neutral-200 w-32 h-32 mx-auto rounded-lg flex items-center justify-center mb-4">
            <span className="text-white">Logo IF</span>
          </div>
          <h1 className="text-2xl text-neutral-900">Acadêmico Pro</h1>
          <p className="text-neutral-600 mt-2">
            Sistema Acadêmico do Instituto Federal
          </p>
        </div>

        <form id="login-form" className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-neutral-700">
              E-mail
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                <FontAwesomeIcon icon={faEnvelope} width={20} />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.academico"
                className="pl-10 w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 text-neutral-700 focus:ring-neutral-500 focus:border-neutral-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm text-neutral-700"
            >
              Senha
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                <FontAwesomeIcon icon={faLock} width={20} />
              </div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                className="pl-10 w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 text-neutral-700 focus:border-neutral-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
              >
                <FontAwesomeIcon icon={faEye} width={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
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

          <button
            type="submit"
            className="w-full bg-neutral-900 text-white py-3 px-4 rounded-lg hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
          >
            Entrar
          </button>
        </form>

        <div
          id="login-footer"
          className="mt-6 text-center text-sm text-neutral-600"
        >
          <p>
            Precisa de ajuda?{" "}
            <span className="text-neutral-900 hover:underline cursor-pointer">
              Entre em contato
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
