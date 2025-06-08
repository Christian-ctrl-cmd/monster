import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';
import { FileText, Gavel, Home, Map } from 'lucide-react';

const NavigationPanel = () => {
  const { currentScene, setScene } = useGameStore();

  const locations = [
    { id: 'prison-cell', name: 'Prison Cell', icon: <Home size={20} />, color: 'bg-gray-700' },
    { id: 'courtroom', name: 'Courtroom', icon: <Gavel size={20} />, color: 'bg-journal-700' },
    { id: 'neighborhood', name: 'Neighborhood', icon: <Map size={20} />, color: 'bg-primary-700' },
    { id: 'evidence-board', name: 'Evidence Board', icon: <FileText size={20} />, color: 'bg-accent-700' },
  ];

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-gray-100 text-gray-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="p-4 h-[300px] md:h-[400px]">
        <h3 className="font-sans text-lg font-bold mb-4 text-gray-900">Navigation</h3>
        
        <p className="mb-4 text-gray-700">
          Choose a location to investigate. Each location might contain evidence or people to talk to that can help your case.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {locations.map(location => (
            <button
              key={location.id}
              onClick={() => setScene(location.id as any)}
              className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
                currentScene === location.id 
                  ? 'ring-2 ring-accent-500 shadow-md transform scale-105' 
                  : 'hover:bg-gray-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-full ${location.color} text-white flex items-center justify-center mb-2`}>
                {location.icon}
              </div>
              <span className="font-medium">{location.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationPanel;