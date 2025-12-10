import React from "react";

const Button = ({ value } ) => {
  return <button className="px-5 py-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition">{value}</button>;
};

export default Button;
