import React from "react";
import RoteiroForm from "./RoteiroForm";

const Modal = ({ roteiros, setRoteiros, setModal}) => {
  function handleClick(e) {
    if (e.target === e.currentTarget) setModal(false)
  }
  return (
    <div className="absolute inset-0 bg-slate-100/60 backdrop-blur-xs animate-fadeIn grid items-center z-40" onClick={handleClick}>
      <RoteiroForm roteiros={roteiros} setRoteiros={setRoteiros} setModal={setModal}/>
    </div>
  );
};

export default Modal;
