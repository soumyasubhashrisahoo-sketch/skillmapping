import LevelSection from './LevelSection';

const SkillRoadmap = ({ skill, skillId, userProgress, onToggleTask }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-black border-b-[3px] border-black pb-2 inline-block">Roadmap</h3>
    {skill.levels.map((level, idx) => (
      <LevelSection
        key={level.id}
        level={level}
        idx={idx}
        isLast={idx === skill.levels.length - 1}
        skill={skill}
        skillId={skillId}
        userProgress={userProgress}
        onToggleTask={onToggleTask}
      />
    ))}
  </div>
);

export default SkillRoadmap;
