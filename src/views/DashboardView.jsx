import { Star, AlertTriangle, Monitor, Globe, Music, Coffee } from 'lucide-react';
import RetroWindow from '../components/RetroWindow';
import RetroButton from '../components/RetroButton';
import ProgressBar from '../components/ProgressBar';
import { skillsData } from '../data/skillsData';

const zoneColors = {
  tech:     'bg-blue-200',
  language: 'bg-yellow-200',
  creative: 'bg-pink-200',
  life:     'bg-green-200',
};

const progressBarColor = {
  tech:     'bg-blue-400',
  language: 'bg-yellow-400',
  creative: 'bg-pink-400',
  life:     'bg-green-400',
};

const ZoneIcon = ({ zone }) => {
  if (zone === 'tech')     return <Monitor size={20} />;
  if (zone === 'language') return <Globe   size={20} />;
  if (zone === 'creative') return <Music   size={20} />;
  return <Coffee size={20} />;
};

const DashboardView = ({ navigate, user, userProgress }) => {
  if (!user) {
    return (
      <div className="w-full max-w-lg mx-auto p-4 text-center">
        <RetroWindow title="ERROR: AUTH_REQUIRED" headerColor="bg-red-800">
          <AlertTriangle size={48} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-xl font-black mb-2">Unauthorized Access</h2>
          <p className="font-mono text-sm mb-6">You must be logged in to view your journey and track progress.</p>
        </RetroWindow>
      </div>
    );
  }

  const recentSkills       = userProgress.recentSkills || [];
  const totalCompletedTasks = Object.keys(userProgress.tasks || {}).length;

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Profile + Stats row */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Profile card */}
        <RetroWindow title="USER_PROFILE.SYS" className="w-full md:w-1/3" headerColor="bg-blue-900">
          <div className="flex flex-col items-center text-center pt-2">
            <div className="w-24 h-24 bg-pink-200 border-[3px] border-black rounded-full mb-4 flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <img
                src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${user}`}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-black mb-1 truncate w-full px-2">{user}</h2>
            <p className="font-mono text-gray-600 mb-4 text-xs uppercase tracking-widest">Explorer Class</p>
            <div className="w-full bg-gray-100 border-2 border-black p-3 text-left shadow-inner">
              <div className="flex justify-between font-mono text-sm mb-1 font-bold">
                <span>Level {userProgress.level}</span>
                <span>{userProgress.xp} XP</span>
              </div>
              <ProgressBar percent={(userProgress.xp % 1000) / 10} color="bg-yellow-400" />
            </div>
          </div>
        </RetroWindow>

        {/* Stats */}
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
          <RetroWindow title="STATS" headerColor="bg-teal-800" className="col-span-2 sm:col-span-1 flex justify-center items-center">
            <div className="text-center py-6">
              <div className="text-5xl font-black text-pink-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{recentSkills.length}</div>
              <div className="font-mono font-bold mt-2 text-sm">Skills Started</div>
            </div>
          </RetroWindow>
          <RetroWindow title="ACHIEVEMENTS" headerColor="bg-yellow-600" className="col-span-2 sm:col-span-1 flex justify-center items-center">
            <div className="text-center py-6">
              <div className="text-5xl font-black text-blue-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{totalCompletedTasks}</div>
              <div className="font-mono font-bold mt-2 text-sm">Tasks Completed</div>
            </div>
          </RetroWindow>
        </div>
      </div>

      {/* Active quests */}
      <h3 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
        <Star className="text-yellow-500 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" fill="currentColor" />
        Active Quests
      </h3>

      {recentSkills.length === 0 ? (
        <div className="border-2 border-dashed border-gray-400 p-8 text-center font-mono text-gray-500">
          No active quests found. Visit the Map to begin.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentSkills.map(skillId => {
            const skill = skillsData[skillId];
            if (!skill) return null;
            let sTotal = 0, sDone = 0;
            skill.levels.forEach(l => l.tasks.forEach(t => {
              sTotal++;
              if (userProgress?.tasks?.[`${skillId}-${t.id}`]) sDone++;
            }));
            const pPct = sTotal > 0 ? Math.round((sDone / sTotal) * 100) : 0;

            return (
              <RetroWindow key={skillId} title={skill.name.toUpperCase()} headerColor="bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold border-2 border-black uppercase mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${zoneColors[skill.zone]}`}>
                      {skill.zone}
                    </span>
                    <h4 className="text-lg font-bold leading-tight">{skill.name}</h4>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 border-2 border-black flex items-center justify-center shrink-0">
                    <ZoneIcon zone={skill.zone} />
                  </div>
                </div>
                <div className="mb-4">
                  <ProgressBar percent={pPct} color={progressBarColor[skill.zone]} />
                </div>
                <div className="flex justify-end">
                  <RetroButton
                    color="bg-green-300"
                    className="py-1 px-4 text-xs w-full sm:w-auto"
                    onClick={() => navigate('skill', skillId)}
                  >
                    Resume
                  </RetroButton>
                </div>
              </RetroWindow>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashboardView;
