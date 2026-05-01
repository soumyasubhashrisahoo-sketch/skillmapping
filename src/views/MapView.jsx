import { Compass, Monitor, Music, Coffee, Globe, BookOpen } from 'lucide-react';
import RetroWindow from '../components/RetroWindow';
import { mapZones } from '../data/skillsData';

const zoneHeaderColors = {
  tech:     'bg-blue-800',
  language: 'bg-yellow-600',
  creative: 'bg-pink-800',
  life:     'bg-green-800',
};

const ZoneIcon = ({ icon, size = 20 }) => {
  if (icon === 'monitor')  return <Monitor size={size} />;
  if (icon === 'bookOpen') return <BookOpen size={size} />;
  if (icon === 'music')    return <Music size={size} />;
  if (icon === 'coffee')   return <Coffee size={size} />;
  if (icon === 'globe')    return <Globe size={size} />;
  return null;
};

const MapView = ({ navigate }) => (
  <div className="w-full max-w-6xl mx-auto p-4">
    <div className="mb-8">
      <h2 className="text-4xl font-black mb-2 flex items-center gap-3">
        <Compass size={40} className="text-blue-600" /> World Map
      </h2>
      <p className="font-mono text-gray-600">Select a zone to explore skills.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {mapZones.map((zone) => (
        <RetroWindow
          key={zone.id}
          title={`ZONE_${zone.id.toUpperCase()}`}
          headerColor={zoneHeaderColors[zone.id]}
          className="h-[400px]"
        >
          <div className={`w-full h-full relative ${zone.color} border-[3px] ${zone.borderColor} overflow-hidden shadow-inner p-4 flex flex-col`}>
            <div className="flex items-center gap-2 mb-4 bg-white/80 p-2 border-2 border-black w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] z-10">
              <ZoneIcon icon={zone.icon} />
              <span className="font-bold font-mono text-sm">{zone.name}</span>
            </div>

            <div className="flex-grow relative border-2 border-dashed border-black/20 bg-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:20px_20px]" />
              {zone.skills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => navigate('skill', skill.id)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/node transition-all hover:z-30"
                  style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                >
                  <div className="w-5 h-5 bg-white border-[3px] border-black rounded-full mb-1 group-hover/node:scale-150 group-hover/node:bg-yellow-300 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full opacity-0 group-hover/node:opacity-100 transition-opacity" />
                  </div>
                  <span className="bg-white border-2 border-black px-2 py-1 text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover/node:-translate-y-1 transition-transform">
                    {skill.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </RetroWindow>
      ))}
    </div>
  </div>
);

export default MapView;
