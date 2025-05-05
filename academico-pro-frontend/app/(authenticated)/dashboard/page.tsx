import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  return (
    <>
      <section id="enrolled-courses" className="mb-8">
        <h2 className="text-xl mb-4 text-neutral-700">
          Minhas Disciplinas Matriculadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-neutral-200 text-neutral-700">
            <h3 className="font-bold">Cálculo I</h3>
            <p className="text-sm text-neutral-600">Código: MAT101</p>
            <p className="text-sm text-neutral-600">Prof. João Silva</p>
            <p className="text-sm text-neutral-600">Seg/Qua 08:00-10:00</p>
            <span className="inline-block mt-2 px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm">
              Cursando
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200 text-neutral-700">
            <h3 className="font-bold">Física I</h3>
            <p className="text-sm text-neutral-600">Código: FIS101</p>
            <p className="text-sm text-neutral-600">Profa. Maria Santos</p>
            <p className="text-sm text-neutral-600">Ter/Qui 10:00-12:00</p>
            <span className="inline-block mt-2 px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm">
              Cursando
            </span>
          </div>
        </div>
      </section>

      <section id="recent-grades" className="mb-8">
        <h2 className="text-xl mb-4 text-neutral-700">Notas Recentes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                <div>
                  <h4 className="text-neutral-700">Cálculo I</h4>
                  <p className="text-sm text-neutral-600">Nota: 8.5</p>
                </div>
                <span className="text-sm bg-neutral-100 px-3 py-1 rounded-full text-neutral-700">
                  Média: 8.2
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                <div>
                  <h4 className="text-neutral-700">Física I</h4>
                  <p className="text-sm text-neutral-600">Nota: 7.8</p>
                </div>
                <span className="text-sm bg-neutral-100 px-3 py-1 rounded-full text-neutral-700">
                  Média: 7.5
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <div className="h-[200px] bg-neutral-100 rounded flex items-center justify-center">
              <span className="text-neutral-600">
                Gráfico de Evolução das Notas
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="notifications">
        <h2 className="text-xl mb-4 text-neutral-700">Notificações Recentes</h2>
        <div className="bg-white rounded-lg border border-neutral-200">
          <div className="p-4 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faBell} width={20} className="text-neutral-600" />
              <div>
                <p className="text-neutral-900">
                  Nova atividade postada em Cálculo I
                </p>
                <p className="text-sm text-neutral-600">04/05/2025 15:10</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faStar} width={20} className="text-neutral-600" />
              <div>
                <p className="text-neutral-900">Nota lançada em Física I</p>
                <p className="text-sm text-neutral-600">04/05/2025 14:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
