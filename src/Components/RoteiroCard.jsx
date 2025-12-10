import React from "react";
import Button from "./Button";
import ModalRoteiro from './ModalRoteiro'

const RoteiroCard = ({ data, titulo, horario, cidade, onDelete, id, showRoteiro, setRoteiroAberto}) => {

  function handleShow() {
    setRoteiroAberto(showRoteiro(id))
  }

  const dataReverse = data.split("-").reverse().join("/")
 
  return (
    <div className="bg-white shadow-xl rounded-xl py-6 px-8 grid group">
      <p className="mt-2 text-slate-700 mb-2">{data && dataReverse}</p>
      <h2 className="text-2xl font-pathway-p font-semibold text-balance">
        {horario} - {titulo}
      </h2>
      <p className="text-xl mt-2">{cidade}</p>
      <div className="flex justify-between mt-10 self-end">
        <button onClick={handleShow} className="px-5 py-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition">
          Abrir
        </button>
        <button onClick={() => onDelete(id)} className="px-5 py-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition">
          Excluir
        </button>
      </div>
    </div>
  );
};

export default RoteiroCard;
