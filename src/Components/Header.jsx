import React from "react";

const Header = ({ setModal, setPage }) => {
  return (
    <header className="bg-slate-200">
      <div className="container gap-x-16 flex flex-wrap items-center max-[480px]:justify-center max-[480px]:gap-y-4 justify-between py-4 lg:py-8 ">
        <a href="./" className="animate-slideIn opacity-0 animate-1 font-pathway-p text-2xl lg:text-3xl text-slate-900">
          Pathway
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex max-[480px]:flex-wrap max-[480px]:justify-center gap-4 lg:gap-8 text-base lg:*:*:text-lg lg:*:*:hover:underline *:*:underline-offset-5 *:*:decoration-slate-900 *:*:cursor-pointer *:*:hover:text-slate-700 *:*:transition max-[480px]:*:*:bg-slate-300 max-[480px]:*:*:hover:bg-slate-400  max-[480px]:*:*:p-2 max-[480px]:*:*:rounded-md">
            <li className="animate-slideIn opacity-0 animate-2">
              <button onClick={() => setPage("inicio")}>Início</button>
            </li>
            <li className="animate-slideIn opacity-0 animate-3 group">
              <button onClick={() => setPage("roteiros")}><span className="hidden sm:inline-block group-hover:underline">Meus</span> Roteiros</button>
            </li>
            <li className="animate-slideIn opacity-0 animate-4">
              <button onClick={() => setModal(true)}>Criar Roteiro</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
