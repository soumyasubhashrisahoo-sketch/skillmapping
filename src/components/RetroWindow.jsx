import { Minus, Square, X } from 'lucide-react';

const RetroWindow = ({ title, children, className = '', headerColor = 'bg-blue-800', onClose }) => (
  <div className={`border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col ${className}`}>
    <div className={`${headerColor} border-b-[3px] border-black px-2 py-1 flex justify-between items-center text-white`}>
      <span className="font-mono text-sm font-bold tracking-wider">{title}</span>
      <div className="flex gap-1">
        <div className="w-5 h-5 bg-gray-300 border-2 border-white border-b-gray-500 border-r-gray-500 flex items-center justify-center text-black">
          <Minus size={12} />
        </div>
        <div className="w-5 h-5 bg-gray-300 border-2 border-white border-b-gray-500 border-r-gray-500 flex items-center justify-center text-black">
          <Square size={10} />
        </div>
        <div
          onClick={onClose || undefined}
          className={`w-5 h-5 bg-gray-300 border-2 border-white border-b-gray-500 border-r-gray-500 flex items-center justify-center font-bold text-black ${onClose ? 'cursor-pointer' : ''}`}
        >
          <X size={12} />
        </div>
      </div>
    </div>
    <div className="p-4 flex-grow">{children}</div>
  </div>
);

export default RetroWindow;
