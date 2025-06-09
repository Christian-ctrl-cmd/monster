import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';
import { MapPin, Scale, Home, Search, BookOpen } from 'lucide-react';

const NavigationPanel = () => {
  const { setScene, currentScene } = useGameStore();

  const locations = [
    {
      id: 'prison-cell',
      name: 'Prison Cell, eh?',
      description: 'Your temporary home, buddy',
      icon: Home,
      available: true
    },
    {
      id: 'courtroom',
      name: 'Courtroom, buddy',
      description: 'Where your fate gets decided, eh?',
      icon: Scale,
      available: true
    },
    {
      id: 'neighborhood',
      name: 'Neighbourhood, eh?',
      description: 'Where it all happened, buddy',
      icon: MapPin,
      available: true
    },
    {
      id: 'evidence-board',
      name: 'Evidence Board, buddy',
      description: 'All the clues and stuff, eh?',
      icon: Search,
      available: true
    },
    {
      id: 'ending',
      name: 'The Verdict, eh?',
      description: 'See how your story ends, buddy',
      icon: BookOpen,
      available: true
    }
  ];

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-white text-gray-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Where do you wanna go, eh?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map(location => {
            const Icon = location.icon;
            const isCurrent = currentScene === location.id;
            
            return (
              <button
                key={location.id}
                onClick={() => setScene(location.id as any)}
                disabled={!location.available || isCurrent}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  isCurrent 
                    ? 'bg-primary-200 text-primary-900 cursor-default' 
                    : location.available 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' 
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon size={20} className={isCurrent ? 'text-primary-700' : 'text-gray-600'} />
                  <div>
                    <h4 className="font-semibold mb-1">{location.name}</h4>
                    <p className="text-sm opacity-75">{location.description}</p>
                    {isCurrent && (
                      <p className="text-xs mt-1 font-medium">You're here now, buddy!</p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationPanel;