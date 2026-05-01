import RetroWindow from './RetroWindow';
import TaskItem from './TaskItem';

const LevelSection = ({ level, idx, isLast, skill, skillId, userProgress, onToggleTask }) => (
  <div className="relative pl-4 sm:pl-8">
    {!isLast && (
      <div className="absolute left-[7px] sm:left-[11px] top-8 bottom-[-24px] w-[3px] bg-black" />
    )}
    <div className="absolute left-[-4px] sm:left-0 top-1 w-6 h-6 rounded-full border-[3px] border-black bg-yellow-300 flex items-center justify-center z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      <div className="w-2 h-2 bg-black rounded-full" />
    </div>

    <RetroWindow title={`LEVEL 0${idx + 1}`} headerColor="bg-gray-800" className="ml-2 sm:ml-0">
      <div className="mb-4">
        <h4 className="text-lg sm:text-xl font-bold">{level.title}</h4>
        <p className="text-gray-600 font-mono text-xs sm:text-sm">{level.description}</p>
      </div>
      <div className="space-y-3">
        {level.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            skill={skill}
            skillId={skillId}
            isDone={!!userProgress?.tasks?.[`${skillId}-${task.id}`]}
            onToggle={onToggleTask}
          />
        ))}
      </div>
    </RetroWindow>
  </div>
);

export default LevelSection;
