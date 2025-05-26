import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="relative dark:bg-zinc-800 bg-slate-800 shadow-2xl p-5 rounded-2xl h-auto w-1/3 min-w-screen min-h-screen mb-5 ">
        <button
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-red-500 text-white drop-shadow-sm transition-colors duration-150 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="fa fa-minus"></span>
          ) : (
            <span className="fa fa-plus"></span>
          )}
        </button>
        <div className="flex flex-col gap-5 mt-10">{isOpen && children}</div>
      </div>
    </>
  );
}

export default Box;
