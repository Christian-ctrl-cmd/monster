import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Search } from 'lucide-react';

const Courtroom = () => {
  const { collectEvidence, hasEvidence, startDialogue } = useGameStore();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showCrossExamination, setShowCrossExamination] = useState(false);

  // Interactable items in the courtroom
  const courtroomItems = [
    { id: 'witness_stand', x: '75%', y: '45%', name: 'Witness Stand', type: 'interaction' },
    { id: 'judge_bench', x: '50%', y: '30%', name: 'Judge\'s Bench', type: 'scenery' },
    { id: 'witness_statement', x: '85%', y: '65%', name: 'Witness Statement', type: 'evidence', evidenceId: 'witness_statement' },
    { id: 'character_reference', x: '30%', y: '70%', name: 'Character Reference', type: 'evidence', evidenceId: 'character_reference' },
    { id: 'king_confession', x: '65%', y: '75%', name: 'King\'s Statement', type: 'evidence', evidenceId: 'king_confession' },
    { id: 'bobo_deal', x: '20%', y: '50%', name: 'Bobo\'s Plea Deal', type: 'evidence', evidenceId: 'bobo_deal' }
  ];

  useEffect(() => {
    // After a few seconds, trigger cross-examination if user hasn't found key evidence
    const hasWitnessStatement = hasEvidence('witness_statement');
    const hasKingConfession = hasEvidence('king_confession');
    
    if (!hasWitnessStatement || !hasKingConfession) {
      const timer = setTimeout(() => {
        setShowCrossExamination(true);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [hasEvidence]);

  useEffect(() => {
    if (showCrossExamination) {
      startDialogue('petrocelli_cross');
    }
  }, [showCrossExamination, startDialogue]);

  const handleItemClick = (item: any) => {
    if (item.type === 'evidence' && !hasEvidence(item.evidenceId)) {
      collectEvidence(item.evidenceId);
    } else if (item.type === 'interaction' && item.id === 'witness_stand') {
      setShowCrossExamination(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full"
    >
      {/* Courtroom background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8112139/pexels-photo-8112139.jpeg')] bg-cover bg-center" />
      
      {/* Dark overlay for better visibility of UI elements */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Scene title */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg z-10">
        <h1 className="text-xl font-medium">Courtroom</h1>
      </div>
      
      {/* Interactable items */}
      {courtroomItems.map(item => (
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
            <Search size={24} className="text-white" />
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
      
      {/* Courtroom description */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 max-w-md bg-black bg-opacity-80 text-white p-4 rounded-lg mb-4">
        <p className="text-center">
          The courtroom is tense. The prosecution is building their case against you. Look for inconsistencies in testimony and evidence that could help your defense.
        </p>
      </div>
    </motion.div>
  );
};

export default Courtroom;