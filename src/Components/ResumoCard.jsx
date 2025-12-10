import React from "react";

const ResumoCard = ({ label, value }) => {
  return (
    <div className="bg-white hover:bg-[#f2f7ff] p-6 rounded-xl shadow-sm">
      <p className="text-slate-500">{label}</p>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
};

export default ResumoCard;
