import { Monitor, Globe, Music, Coffee } from 'lucide-react';
import RetroWindow from '../components/RetroWindow';
import ProgressBar from '../components/ProgressBar';
import SkillRoadmap from '../components/SkillRoadmap';
import { skillsData } from '../data/skillsData';

const ZoneIcon = ({ zone }) => {
  if (zone === 'tech')     return <Monitor size={48} className="text-blue-500" />;
  if (zone === 'language') return <Globe   size={48} className="text-yellow-600" />;
  if (zone === 'creative') return <Music   size={48} className="text-pink-500" />;
  return <Coffee size={48} className="text-green-500" />;
};

const SkillDetailView = ({ skillId, userProgress, onToggleTask }) => {
  const skill = skillsData[skillId];
  if (!skill) return <div className="p-4 font-mono font-bold">Error: Skill not found.</div>;

  let totalTasks = 0;
  let completedTasks = 0;
  skill.levels.forEach(l =>
    l.tasks.forEach(t => {
      totalTasks++;
      if (userProgress?.tasks?.[`${skillId}-${t.id}`]) completedTasks++;
    })
  );
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <RetroWindow title={`SKILL_DATA: ${skill.name.toUpperCase()}`} headerColor="bg-purple-800" className="mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
            <ZoneIcon zone={skill.zone} />
          </div>
          <div className="flex-grow w-full">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">{skill.name}</h2>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-yellow-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {skill.zone} Zone
              </span>
              <span className="text-gray-600 font-mono text-sm bg-gray-100 px-2 py-1 border border-dashed border-gray-400">
                {totalTasks} Quests
              </span>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-end mb-1">
                <p className="font-mono text-sm font-bold">Training Progress</p>
                <span className="text-xs font-mono">{completedTasks}/{totalTasks}</span>
              </div>
              <ProgressBar percent={progressPercent} color="bg-purple-400" />
            </div>
          </div>
        </div>
      </RetroWindow>

      <SkillRoadmap
        skill={skill}
        skillId={skillId}
        userProgress={userProgress}
        onToggleTask={onToggleTask}
      />
    </div>
  );
};

export default SkillDetailView;
