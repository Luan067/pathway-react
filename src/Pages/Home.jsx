import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Modal from "../Components/Modal";
import ModalRoteiro from "../Components/ModalRoteiro";
import HomeDashboard from "../Components/HomeDashboard";

const Home = () => {
  const [roteiros, setRoteiros] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [roteiroAberto, setRoteiroAberto] = React.useState(null);
  const [modalEtapa, setModalEtapa] = React.useState(false);
  const [page, setPage] = React.useState("inicio");


  React.useEffect(() => {
    const salvo = localStorage.getItem("roteiros");
    if (salvo) {
      const dados = JSON.parse(salvo);
      setRoteiros(dados);
    } else {
      setRoteiros([]);
    }
  }, []);

  React.useEffect(() => {
    if (modal || modalEtapa || roteiroAberto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal, modalEtapa, roteiroAberto]);

  React.useEffect(() => {
    localStorage.setItem("roteiros", JSON.stringify(roteiros));
  }, [roteiros]);

  function onDelete(id) {
    setRoteiros((prevRoteiros) => prevRoteiros.filter((roteiro) => roteiro.id !== id));
  }

  function showRoteiro(id) {
    return roteiros.find((roteiro) => roteiro.id === id);
  }

  function addEtapa(roteiroId, novaEtapa) {
    setRoteiros((prev) => prev.map((roteiro) => (roteiro.id === roteiroId ? { ...roteiro, etapas: [...roteiro.etapas, novaEtapa] } : roteiro)));
    setRoteiroAberto((prev) => (prev.id === roteiroId ? { ...prev, etapas: [...prev.etapas, novaEtapa] } : prev));
  }

  function removeEtapa(roteiroId, etapaId) {
    setRoteiros((prev) =>
      prev.map((roteiro) =>
        roteiro.id === roteiroId
          ? {
              ...roteiro,
              etapas: roteiro.etapas.filter((etapa) => etapa.id !== etapaId),
            }
          : roteiro,
      ),
    );

    setRoteiroAberto((prev) =>
      prev && prev.id === roteiroId
        ? {
            ...prev,
            etapas: prev.etapas.filter((etapa) => etapa.id !== etapaId),
          }
        : prev,
    );
  }

  return (
    <div className="flex-1">
      <Header setModal={setModal} setPage={setPage} />
      {modal && <Modal roteiros={roteiros} setRoteiros={setRoteiros} setModal={setModal} />}
      {roteiroAberto && (
        <ModalRoteiro
          removeEtapa={removeEtapa}
          roteiros={roteiros}
          setModalEtapa={setModalEtapa}
          modalEtapa={modalEtapa}
          addEtapa={addEtapa}
          roteiroAberto={roteiroAberto}
          setRoteiroAberto={setRoteiroAberto}
        />
      )}
      {page === "inicio" && <HomeDashboard setPage={setPage} roteiros={roteiros} setModal={setModal} />}
      {page === "roteiros" && (
        <Hero showRoteiro={showRoteiro} setRoteiros={setRoteiros} onDelete={onDelete} setModal={setModal} setRoteiroAberto={setRoteiroAberto} roteiros={roteiros} />
      )}
    </div>
  );
};

export default Home;
