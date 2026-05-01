import { Map, ArrowLeft, LogIn } from 'lucide-react';

const Navbar = ({ currentView, history, onNavigate, onBack, onLogin, onLogout, currentUserEmail }) => (
  <nav className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b-[3px] border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3 sm:gap-4">
        {history.length > 1 && (
          <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center border-2 border-black bg-yellow-200 hover:bg-yellow-300 active:translate-y-[2px] active:translate-x-[2px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        )}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="w-8 h-8 bg-black flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Map className="text-white" size={20} />
          </div>
          <span className="font-black text-lg sm:text-xl tracking-tight hidden sm:block">SkillMap</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4 font-mono font-bold text-xs sm:text-sm">
        <button
          onClick={() => onNavigate('map')}
          className={`hover:bg-pink-200 px-2 sm:px-3 py-1 border-2 border-transparent hover:border-black transition-all ${currentView === 'map' ? 'bg-pink-200 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : ''}`}
        >
          MAP
        </button>
        <button
          onClick={() => onNavigate('dashboard')}
          className={`hover:bg-blue-200 px-2 sm:px-3 py-1 border-2 border-transparent hover:border-black transition-all ${currentView === 'dashboard' ? 'bg-blue-200 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : ''}`}
        >
          PROFILE
        </button>
        {currentUserEmail ? (
          <button
            onClick={onLogout}
            className="ml-2 hover:bg-red-200 px-2 py-1 border-2 border-transparent hover:border-black transition-all text-red-600 hidden sm:block"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={onLogin}
            className="ml-2 bg-green-200 px-2 sm:px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all flex items-center gap-1"
          >
            <LogIn size={14} className="hidden sm:block" /> LOGIN
          </button>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
