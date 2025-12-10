import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-300 bg-slate-200">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="animate-slideIn animate-1">
          <p className="text-sm text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} <strong>Pathway</strong> — por Luan067
          </p>
        </div>
        <a className="animate-slideIn animate-2 text-sm underline hover:text-slate-900 transition" href="https://github.com/Luan067" target="_blank">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
