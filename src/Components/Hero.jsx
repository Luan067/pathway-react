import React from "react";
import RoteiroCard from "./RoteiroCard";
import Button from "./Button";

const Hero = ({ roteiros, setModal, onDelete, setRoteiroAberto, showRoteiro}) => {
  return (
    <main className="bg-slate-50 py-8 animate-slideIn">
      <div className="container">
        <h1 className="text-2xl lg:text-4xl font-pathway-p text-balance text-start max-sm:text-center">Crie roteiros incríveis com o Pathway</h1>
        <p className="mt-1 lg:text-base text-sm text-slate-700 text-start max-sm:text-center">Planeje seus passeios em uma timeline interativa.</p>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 mt-6 lg:mt-8">
          {roteiros.length ? (
            roteiros.map(({ titulo, horario, cidade, data, id }) => <RoteiroCard setRoteiroAberto={setRoteiroAberto} showRoteiro={showRoteiro} onDelete={onDelete} id={id} key={id} titulo={titulo} horario={horario} cidade={cidade} data={data} />)
          ) : (
            <div className="grid">
              <h2 className="text-xl font-pathway-p font-semibold max-sm:text-center">Você ainda não possui um roteiro.</h2>
              <button onClick={() => setModal(true)} className="justify-self-start max-sm:justify-self-center px-5 py-2 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 transition mt-2">Criar Roteiro</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Hero;
