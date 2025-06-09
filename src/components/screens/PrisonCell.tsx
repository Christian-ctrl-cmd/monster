import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Home, Search } from 'lucide-react';

const PrisonCell = () => {
  const { collectEvidence, hasEvidence, evidence, startDialogue } = useGameStore();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showMomVisit, setShowMomVisit] = useState(false);

  // Interactable items in the cell
  const cellItems = [
    { id: 'bed', x: '20%', y: '70%', name: 'Bed', type: 'scenery' },
    { id: 'journal', x: '65%', y: '60%', name: 'Journal', type: 'evidence', evidenceId: 'journal' },
    { id: 'film_script', x: '80%', y: '30%', name: 'Film Script', type: 'evidence', evidenceId: 'film_script' },
    { id: 'phone_record', x: '40%', y: '45%', name: 'Phone Records', type: 'evidence', evidenceId: 'phone_record' },
    { id: 'visitor', x: '10%', y: '30%', name: 'Visitor Area', type: 'interaction' }
  ];

  useEffect(() => {
    // After a few seconds, trigger mom's visit if not already collected some evidence
    const hasJournal = hasEvidence('journal');
    const hasFilmScript = hasEvidence('film_script');
    
    if (!hasJournal && !hasFilmScript) {
      const timer = setTimeout(() => {
        setShowMomVisit(true);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [hasEvidence]);

  useEffect(() => {
    if (showMomVisit) {
      startDialogue('mom_visit');
    }
  }, [showMomVisit, startDialogue]);

  const handleItemClick = (item: any) => {
    if (item.type === 'evidence' && !hasEvidence(item.evidenceId)) {
      collectEvidence(item.evidenceId);
    } else if (item.type === 'interaction' && item.id === 'visitor') {
      setShowMomVisit(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full"
    >
      {/* Prison cell background */}
      <div className="absolute inset-0 bg-[url('https://www.aclu-in.org/sites/default/files/styles/featured_image_580x386/public/field_image/dark_jail_cell.jpeg?itok=RlrVd2fQ')] bg-cover bg-center" />
      
      {/* Dark overlay for better visibility of UI elements */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Scene title */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg z-10">
        <h1 className="text-xl font-medium">Prison Cell</h1>
      </div>
      
      {/* Interactable items */}
      {cellItems.map(item => (
        <div
          key={item.id}
          className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10`}
          style={{ left: item.x, top: item.y }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => handleItemClick(item)}
        >
          {/* Indicator */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: hoveredItem === item.id ? 1 : 0.7
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2
            }}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              item.type === 'evidence' 
                ? hasEvidence(item.evidenceId) 
                  ? 'bg-green-500 bg-opacity-70' 
                  : 'bg-accent-500 bg-opacity-70'
                : 'bg-primary-500 bg-opacity-70'
            }`}
          >
            {item.type === 'evidence' 
              ? <Search size={24} className="text-white" />
              : <Home size={24} className="text-white" />
            }
          </motion.div>
          
          {/* Item name tooltip */}
          {hoveredItem === item.id && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-80 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              {item.name}
              {item.type === 'evidence' && hasEvidence(item.evidenceId) && " (Collected)"}
            </div>
          )}
        </div>
      ))}
      
      {/* Cell description */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 max-w-md bg-black bg-opacity-80 text-white p-4 rounded-lg mb-4">
        <p className="text-center">
          Your small prison cell contains a few personal items. Searching carefully might reveal evidence to help your case.
        </p>
      </div>
    </motion.div>
  );
};

export default PrisonCell;