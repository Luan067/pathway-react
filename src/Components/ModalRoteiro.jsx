import React from "react";
import ModalEtapa from "./ModalEtapa";
import Button from "./Button";

const ModalRoteiro = ({ roteiroAberto, setRoteiroAberto, modalEtapa, setModalEtapa, addEtapa, roteiros, removeEtapa }) => {
  const { titulo, cidade, horario, data, etapas } = roteiroAberto;

  function handleClick(e) {
    if (e.target === e.currentTarget) setRoteiroAberto(false);
  }

  function handleDelete(roteiroId, etapaId) {
    removeEtapa(roteiroId, etapaId);
  }

  return (
    <div className="fixed inset-0 bg-slate-100/60 backdrop-blur-sm animate-fadeIn overflow-y-auto z-40 max-sm:px-2" onClick={handleClick}>
      <div className="mx-auto my-8 w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 lg:p-8 relative" onClick={(e) => e.stopPropagation()}>
        <div className="mb-6 pb-4 border-b border-slate-200">
          <h1 className="font-pathway-p text-3xl text-slate-900 text-center text-balance">{titulo}</h1>
          <p className="text-center text-slate-500 mt-1">Seu roteiro</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <div>
            <span className="block text-sm text-slate-400 mb-1">Data</span>
            <p className="font-medium">{data}</p>
          </div>

          <div>
            <span className="block text-sm text-slate-400 mb-1">Horário</span>
            <p className="font-medium">{horario}</p>
          </div>

          <div className="sm:col-span-2">
            <span className="block text-sm text-slate-400 mb-1">Cidade</span>
            <p className="font-medium">{cidade}</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200">
          <p className="text-center text-slate-500 mt-1 mb-4">Suas Etapas</p>
          <div className="flex flex-col gap-6 relative">
            {etapas.length ? (
              etapas.map((etapa) => (
                <div key={etapa.id} className="flex gap-4 bg-slate-100 odd:bg-slate-200 items-center group hover:bg-slate-200 odd:hover:bg-slate-300">
                  <div className="flex gap-4 max-sm:flex-wrap items-end flex-1 rounded-xl p-4 shadow-sm transition justify-between max-sm:flex-col">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-300 text-slate-800">{etapa.horario}</span>
                      </div>
                      <p className="text-slate-700 leading-snug break-all text-balance">{etapa.descricao}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(roteiroAberto.id, etapa.id)}
                      className="max-sm:self-start max-sm:mt-4 self-end py-2 px-3 bg-red-100 text-red-900 rounded-lg cursor-pointer hover:text-red-950 hover:bg-red-300 transition"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-500 pl-6">Nenhuma etapa adicionada ainda.</p>
            )}
          </div>
        </div>

        <div className={`mt-8 flex flex-wrap justify-center min-[450px]:justify-between gap-4`}>
          <button onClick={() => setModalEtapa(true)} className="px-4 lg:px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition">
            Criar Etapa
          </button>
          <button onClick={() => setRoteiroAberto(null)} className="px-4 lg:px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition">
            Fechar
          </button>
        </div>
      </div>

      {modalEtapa && <ModalEtapa addEtapa={addEtapa} setModalEtapa={setModalEtapa} roteiroAberto={roteiroAberto} roteiros={roteiros} />}
    </div>
  );
};

export default ModalRoteiro;
