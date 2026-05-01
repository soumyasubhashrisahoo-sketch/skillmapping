const RetroButton = ({ children, onClick, color = 'bg-yellow-200', className = '', icon }) => (
  <button
    onClick={onClick}
    className={`
      ${color} border-[3px] border-black px-6 py-2 font-mono font-bold uppercase text-sm tracking-widest
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
      transition-all duration-75 flex items-center gap-2 justify-center w-full sm:w-auto
      ${className}
    `}
  >
    {icon}
    {children}
  </button>
);

export default RetroButton;
