import React from "react";
import RoteiroCard from "./RoteiroCard";
import ResumoCard from "./ResumoCard";

const HomeDashboard = ({ roteiros, setPage }) => {
  const totalRoteiros = roteiros.length;

  const totalEtapas = roteiros.reduce((total, r) => total + r.etapas.length, 0);

  const proximos = roteiros.slice(0, 3);

  return (
    <main className="bg-slate-50 py-10 animate-slideIn">
      <div className="container space-y-10">
        <section className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-pathway-p mb-2">Planeje seus melhores passeios</h1>

          <p className="text-slate-600 mb-4">Organize roteiros em uma timeline simples e intuitiva.</p>
          {proximos.length ? (
            <button
              onClick={() => setPage("roteiros")}
              className="max-lg:place-self-center bg-slate-300 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-slate-900
             hover:bg-slate-400 transition group"
            >
              Gerenciar meus roteiros<span className="hidden lg:block lg:group-hover:translate-x-1.5 lg:transition-all">→</span>
            </button>
          ) : null}
        </section>

        <section className="grid sm:grid-cols-2 gap-6 lg:w-3xl lg:justify-center">
          <ResumoCard label="Roteiros" value={totalRoteiros} />
          <ResumoCard label="Etapas" value={totalEtapas} />
        </section>

        <section className="max-lg:grid">
          <h2 className="font-pathway-p text-2xl mb-2 max-lg:justify-self-center">Roteiros recentes</h2>
          <p className="text-slate-600 mb-4 max-lg:text-center">
            Veja seus ultimos <span className="font-semibold">três</span> roteiros.
          </p>
          {proximos.length ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {proximos.map((r) => (
                <div key={r.id} className="bg-white hover:bg-[#f2f7ff] p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-slate-500">{r.data}</p>
                  <h3 className="font-semibold text-lg">
                    {r.horario} - {r.titulo}
                  </h3>
                  <p className="text-slate-600">{r.cidade}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 max-lg:text-center">Nenhum roteiro criado ainda.</p>
          )}
          
        </section>
      </div>
    </main>
  );
};

export default HomeDashboard;
