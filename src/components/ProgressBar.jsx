const ProgressBar = ({ percent, color = 'bg-green-400' }) => (
  <div className="w-full h-6 border-[3px] border-black bg-white relative overflow-hidden">
    <div
      className={`h-full ${color} border-r-[3px] border-black transition-all duration-500`}
      style={{ width: `${Math.max(5, percent)}%` }}
    >
      <div className="w-full h-1/2 bg-white/20 absolute top-0" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold mix-blend-difference text-white">
      {percent}%
    </div>
  </div>
);

export default ProgressBar;
