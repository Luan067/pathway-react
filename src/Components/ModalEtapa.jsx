import React from "react";
import Button from "./Button";

const ModalEtapa = ({ setModalEtapa, roteiroAberto, addEtapa }) => {
  const [etapaHorario, setEtapaHorario] = React.useState("");
  const [etapaDesc, setEtapaDesc] = React.useState("");
  const [erroForm, setErroForm] = React.useState(false);

  function handleClick(e) {
    if (e.target === e.currentTarget) setModalEtapa(false);
  }

  function handleChange(setter) {
    return (e) => {
      setter(e.target.value);
      setErroForm(false);
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novaEtapa = {
      id: crypto.randomUUID(),
      horario: etapaHorario,
      descricao: etapaDesc,
    };

    if (!etapaHorario || !etapaDesc.trim()) {
      setErroForm(true);
      return;
    } else {
      addEtapa(roteiroAberto.id, novaEtapa);
      setModalEtapa(false);
    }
  }

  const baseInput = "py-1 px-2 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 transition";
  const classInput = erroForm ? `${baseInput} border-red-500 ring-red-300` : `${baseInput} border-slate-600 ring-slate-400`;

  return (
    <div className="absolute inset-0 bg-slate-100/60 backdrop-blur-xs animate-fadeIn grid items-center z-50" onClick={handleClick}>
      <form
        className="flex flex-col bg-white max-w-xl rounded-2xl shadow-2xl p-4 lg:p-8 relative mx-auto gap-4"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center underline underline-offset-6">Crie sua Etapa</h1>
        <div className="grid items-center gap-1">
          <label htmlFor="titulo" className="text-xl">
            Horário
          </label>
          <input type="time" id="titulo" value={etapaHorario} className={classInput} onChange={handleChange(setEtapaHorario)}></input>
        </div>
        <div className="grid items-center gap-1">
          <label htmlFor="titulo" className="text-xl">
            Descrição
          </label>
          <input type="text" id="titulo" value={etapaDesc} className={classInput} onChange={handleChange(setEtapaDesc)}></input>
        </div>
        <div className="mt-4">
          <Button value="Criar Etapa" />

          {erroForm && <span className="block mt-2 text-red-500">Preencha todos os campos.</span>}
        </div>
      </form>
    </div>
  );
};

export default ModalEtapa;
