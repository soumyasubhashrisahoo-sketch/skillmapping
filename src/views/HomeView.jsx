import { useState, useRef, useEffect } from 'react';
import { Map, User, Radio, Disc, Mail, Search, AlertTriangle, Loader } from 'lucide-react';
import RetroWindow from '../components/RetroWindow';
import RetroButton from '../components/RetroButton';
import { skillsData, SUPPORTED_LANGUAGES } from '../data/skillsData';

const HomeView = ({ navigate }) => {
  const [query, setQuery]               = useState('');
  const [suggestions, setSuggestions]   = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError]               = useState('');
  const [isSearching, setIsSearching]   = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setError('');
    if (val.trim()) {
      const q = val.toLowerCase();
      const matches = Object.keys(skillsData)
        .filter(k => skillsData[k].name.toLowerCase().includes(q) || k.toLowerCase().includes(q))
        .map(k => ({ id: k, name: skillsData[k].name, zone: skillsData[k].zone }));
      SUPPORTED_LANGUAGES.forEach(lang => {
        if (lang.includes(q) && !matches.find(m => m.id === lang)) {
          matches.push({ id: lang, name: lang.charAt(0).toUpperCase() + lang.slice(1), zone: 'language' });
        }
      });
      setSuggestions(matches.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const executeSearch = (targetQuery = query) => {
    const q = targetQuery.trim().toLowerCase();
    if (!q) return;
    setShowSuggestions(false);
    setError('');
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const existingKey =
        Object.keys(skillsData).find(key => skillsData[key].name.toLowerCase() === q || key.toLowerCase() === q) ||
        Object.keys(skillsData).find(key => skillsData[key].name.toLowerCase().includes(q));
      if (existingKey) { navigate('skill', existingKey); return; }
      const matchedLang = SUPPORTED_LANGUAGES.find(lang => q.includes(lang));
      if (matchedLang) { navigate('skill', matchedLang); return; }
      setError('Skill not found. Try: Guitar, Cooking, Frontend, French, Math');
    }, 400);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative w-full max-w-4xl mx-auto px-4">
      {/* Floating decorations */}
      <div className="absolute top-10 left-10 animate-bounce hidden md:block">
        <Radio size={48} className="text-pink-400 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce hidden md:block">
        <Disc size={56} className="text-blue-400 opacity-50" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse hidden md:block">
        <Mail size={40} className="text-yellow-400 opacity-50" />
      </div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h1
          className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-black"
          style={{ textShadow: '4px 4px 0px #FCA5A5' }}
        >
          SkillMap
        </h1>
        <p className="text-xl font-mono text-gray-700 bg-white/50 backdrop-blur-sm inline-block px-4 py-1 border-2 border-black border-dashed">
          Chart your course in the real world.
        </p>
      </div>

      {/* Search box */}
      <RetroWindow title="SEARCH.EXE" className="w-full max-w-xl mb-10 mx-auto" headerColor="bg-teal-700">
        <div className="flex flex-col gap-2 relative" ref={searchRef}>
          <div className="flex flex-col sm:flex-row gap-2 relative">
            <div className="flex-grow border-[3px] border-black bg-white flex items-center px-3 shadow-inner relative z-20">
              {isSearching
                ? <Loader className="text-gray-400 mr-2 animate-spin" size={20} />
                : <Search className="text-gray-400 mr-2" size={20} />
              }
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
                onKeyDown={(e) => e.key === 'Enter' && executeSearch()}
                placeholder="Search any skill or language..."
                className="w-full py-3 outline-none font-mono text-sm bg-transparent"
                disabled={isSearching}
              />
            </div>
            <button
              disabled={isSearching}
              onClick={() => executeSearch()}
              className={`bg-gray-200 border-[3px] border-black px-6 py-2 sm:py-0 font-bold transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] z-20 ${isSearching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              GO
            </button>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-[100%] left-0 right-0 sm:right-[100px] mt-1 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-30 flex flex-col">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    className="p-3 hover:bg-yellow-100 cursor-pointer border-b last:border-b-0 border-black/10 flex justify-between items-center"
                    onClick={() => { setQuery(s.name); setShowSuggestions(false); executeSearch(s.id); }}
                  >
                    <span className="font-mono font-bold text-sm">{s.name}</span>
                    <span className="text-[10px] bg-gray-200 border border-black px-1 uppercase tracking-widest">{s.zone}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {error && (
            <div className="text-red-600 font-bold font-mono text-xs mt-1 bg-red-100 px-2 py-2 border-2 border-red-300 w-full flex items-start gap-2">
              <AlertTriangle size={14} className="shrink-0 mt-0.5" />{error}
            </div>
          )}
        </div>
      </RetroWindow>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-6 z-10 w-full sm:w-auto">
        <RetroButton color="bg-pink-300" icon={<Map size={20} />} onClick={() => navigate('map')}>
          Explore Map
        </RetroButton>
        <RetroButton color="bg-blue-300" icon={<User size={20} />} onClick={() => navigate('dashboard')}>
          My Journey
        </RetroButton>
      </div>
    </div>
  );
};

export default HomeView;
