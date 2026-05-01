import { CheckCircle, Circle, Youtube, ExternalLink } from 'lucide-react';
import { getYoutubeLink, getResourceLink } from '../utils/links';

const TaskItem = ({ task, skill, skillId, isDone, onToggle }) => (
  <div className={`flex flex-col lg:flex-row lg:items-center justify-between p-3 border-2 border-black ${isDone ? 'bg-green-50' : 'bg-white'} hover:bg-gray-50 transition-colors gap-3 lg:gap-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]`}>
    <div className="flex items-start lg:items-center gap-3">
      <button
        onClick={() => onToggle(skillId, task.id)}
        className="text-black hover:scale-110 active:scale-95 transition-transform mt-0.5 lg:mt-0 shrink-0"
      >
        {isDone
          ? <CheckCircle className="text-green-600 drop-shadow-md" size={24} />
          : <Circle size={24} className="text-gray-400" />
        }
      </button>
      <span className={`font-mono text-sm sm:text-base ${isDone ? 'line-through text-gray-500' : 'font-bold'}`}>
        {task.title}
      </span>
    </div>

    <div className="flex flex-wrap items-center gap-2 pl-9 lg:pl-0">
      <a
        href={getYoutubeLink(skill.name, task.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 p-1.5 px-3 bg-red-100 border-2 border-black hover:bg-red-200 active:translate-y-1 text-xs font-bold text-red-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
      >
        <Youtube size={14} /> Watch
      </a>
      <a
        href={getResourceLink(skill.name, task.title, skill.zone)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 p-1.5 px-3 bg-blue-100 border-2 border-black hover:bg-blue-200 active:translate-y-1 text-xs font-bold text-blue-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
      >
        <ExternalLink size={14} /> Guide
      </a>
    </div>
  </div>
);

export default TaskItem;
