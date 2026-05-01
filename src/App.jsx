import { useState, useEffect } from 'react';
import { ArrowLeft, Loader } from 'lucide-react';

import NoiseOverlay    from './components/NoiseOverlay';
import Navbar          from './components/Navbar';
import Footer          from './components/Footer';
import AuthModal       from './components/AuthModal';
import AuthPromptModal from './components/AuthPromptModal';

import HomeView        from './views/HomeView';
import MapView         from './views/MapView';
import SkillDetailView from './views/SkillDetailView';
import DashboardView   from './views/DashboardView';

export default function App() {
  const [currentView,    setCurrentView]    = useState('home');
  const [activeSkillId,  setActiveSkillId]  = useState(null);
  const [history,        setHistory]        = useState([{ view: 'home', payload: null }]);
  const [isLoading,      setIsLoading]      = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const [allProgress,    setAllProgress]    = useState({});
  const [showAuthModal,  setShowAuthModal]  = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // Load persisted data
  useEffect(() => {
    const savedEmail    = localStorage.getItem('skillmap_email');
    const savedProgress = localStorage.getItem('skillmap_progress');
    if (savedEmail)    setCurrentUserEmail(savedEmail);
    if (savedProgress) setAllProgress(JSON.parse(savedProgress));
  }, []);

  // Persist progress
  useEffect(() => {
    if (Object.keys(allProgress).length > 0) {
      localStorage.setItem('skillmap_progress', JSON.stringify(allProgress));
    }
  }, [allProgress]);

  const userProgress = currentUserEmail && allProgress[currentUserEmail]
    ? allProgress[currentUserEmail]
    : { xp: 0, level: 1, tasks: {}, recentSkills: [] };

  // ── Auth ──────────────────────────────────────────
  const handleLogin = (email) => {
    setCurrentUserEmail(email);
    localStorage.setItem('skillmap_email', email);
    if (!allProgress[email]) {
      setAllProgress(prev => ({ ...prev, [email]: { xp: 0, level: 1, tasks: {}, recentSkills: [] } }));
    }
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentUserEmail(null);
    localStorage.removeItem('skillmap_email');
    navigateTo('home');
  };

  // ── Task toggle ───────────────────────────────────
  const handleToggleTask = (skillId, taskId) => {
    if (!currentUserEmail) { setShowAuthPrompt(true); return; }
    setAllProgress(prev => {
      const userState = { ...(prev[currentUserEmail] || { xp: 0, level: 1, tasks: {}, recentSkills: [] }) };
      const taskKey       = `${skillId}-${taskId}`;
      const isCurrentlyDone = !!userState.tasks[taskKey];
      userState.tasks = { ...userState.tasks };
      if (isCurrentlyDone) { delete userState.tasks[taskKey]; }
      else                 { userState.tasks[taskKey] = true; }
      const xpChange  = isCurrentlyDone ? -50 : 50;
      userState.xp    = Math.max(0, userState.xp + xpChange);
      userState.level = Math.floor(userState.xp / 1000) + 1;
      return { ...prev, [currentUserEmail]: userState };
    });
  };

  // ── Navigation ────────────────────────────────────
  const navigateTo = (view, payload = null) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setActiveSkillId(view === 'skill' ? payload : null);
      setHistory(prev => [...prev, { view, payload }]);
      if (view === 'skill' && payload && currentUserEmail) {
        setAllProgress(prev => {
          const userState = { ...prev[currentUserEmail] };
          let recents = [...(userState.recentSkills || [])];
          if (!recents.includes(payload)) { recents.unshift(payload); if (recents.length > 4) recents.pop(); }
          userState.recentSkills = recents;
          return { ...prev, [currentUserEmail]: userState };
        });
      }
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 250);
  };

  const goBack = () => {
    if (history.length <= 1) return;
    const newHistory    = history.slice(0, -1);
    const previousState = newHistory[newHistory.length - 1];
    setIsLoading(true);
    setTimeout(() => {
      setHistory(newHistory);
      setCurrentView(previousState.view);
      setActiveSkillId(previousState.payload);
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 200);
  };

  // ── Render ────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black font-sans selection:bg-pink-300 selection:text-black relative flex flex-col">
      <NoiseOverlay />
      <style>{`
        @keyframes fadeIn   { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bslight  { 0%,100% { transform:translateY(-2px); } 50% { transform:translateY(2px); } }
      `}</style>

      <Navbar
        currentView={currentView}
        history={history}
        onNavigate={navigateTo}
        onBack={goBack}
        onLogin={() => setShowAuthModal(true)}
        onLogout={handleLogout}
        currentUserEmail={currentUserEmail}
      />

      <main className="py-6 sm:py-8 relative z-10 flex-grow">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center font-mono animate-pulse">
            <Loader size={48} className="animate-spin mb-4" />
            <p className="font-bold text-xl tracking-widest">LOADING_SYSTEM...</p>
          </div>
        ) : (
          <>
            {currentView === 'home'      && <HomeView navigate={navigateTo} />}
            {currentView === 'map'       && <MapView  navigate={navigateTo} />}
            {currentView === 'skill'     && (
              <div className="w-full max-w-4xl mx-auto px-4">
                <button onClick={goBack} className="mb-4 sm:mb-6 flex items-center gap-2 font-mono font-bold hover:underline text-sm sm:text-base">
                  <ArrowLeft size={16} /> Go Back
                </button>
                <SkillDetailView
                  skillId={activeSkillId}
                  userProgress={userProgress}
                  onToggleTask={handleToggleTask}
                />
              </div>
            )}
            {currentView === 'dashboard' && (
              <DashboardView
                navigate={navigateTo}
                user={currentUserEmail}
                userProgress={userProgress}
              />
            )}
          </>
        )}
      </main>

      {showAuthModal  && <AuthModal       onClose={() => setShowAuthModal(false)}  onLogin={handleLogin} />}
      {showAuthPrompt && <AuthPromptModal onClose={() => setShowAuthPrompt(false)} onOpenLogin={() => { setShowAuthPrompt(false); setShowAuthModal(true); }} />}

      <Footer currentUserEmail={currentUserEmail} onLogout={handleLogout} />
    </div>
  );
}
