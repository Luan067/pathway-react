import React from "react";
import Button from "./Button";

const RoteiroForm = ({ roteiros, setRoteiros, setModal }) => {
  const [titulo, setTitulo] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [data, setData] = React.useState("");

  const [erroForm, setErroForm] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo.trim() || !cidade.trim() || !horario || !data) {
      setErroForm(true);
      return;
    } else {
      setRoteiros([...roteiros, { titulo, cidade, horario, data, id: crypto.randomUUID(), etapas: []}]);
      setModal(false);
    }
  }

  function handleChange(setter) {
    return (e) => {
      setter(e.target.value);
      setErroForm(false);
    };
  }

  const invalido = !titulo?.trim() || !cidade?.trim() || !horario || !data;
  const baseInput = "py-1 px-2 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 transition";
  const classInput = erroForm ? `${baseInput} border-red-500 ring-red-300` : `${baseInput} border-slate-600 ring-slate-400`;

  return (
    <form className="bg-white p-4 lg:p-8 flex flex-col rounded-xl gap-4 shadow-xl mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-2xl text-center underline underline-offset-6">Crie seu Roteiro</h1>
      <div className="grid items-center gap-1">
        <label htmlFor="titulo" className="text-xl">
          Local
        </label>
        <input type="text" id="titulo" value={titulo} className={classInput} onChange={handleChange(setTitulo)}></input>
      </div>
      <div className="grid items-center gap-1">
        <label htmlFor="cidade" className="text-xl">
          Cidade
        </label>
        <input type="text" id="cidade" value={cidade} className={classInput} onChange={handleChange(setCidade)}></input>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8">
        <div className="grid items-center gap-1">
          <label htmlFor="data" className="text-xl">
            Data
          </label>
          <input type="date" id="data" value={data} className={classInput} onChange={handleChange(setData)}></input>
        </div>

        <div className="grid items-center gap-1">
          <label htmlFor="horario" className="text-xl">
            Horário
          </label>
          <input type="time" id="horario" value={horario} className={classInput} onChange={handleChange(setHorario)}></input>
        </div>
      </div>
      <div className="mt-4">
        <Button value="Criar Roteiro" disabled={invalido} />

        {erroForm && <span className="block mt-2 text-red-500">Preencha todos os campos.</span>}
      </div>
    </form>
  );
};

export default RoteiroForm;
