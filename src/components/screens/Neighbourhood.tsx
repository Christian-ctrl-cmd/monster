import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Home, Search } from 'lucide-react';

const Neighbourhood = () => {
  const { collectEvidence, hasEvidence } = useGameStore();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Interactable items in the neighbourhood
  const neighbourhoodItems = [
    { id: 'corner_store', x: '30%', y: '60%', name: 'Corner Store', type: 'scenery' },
    { id: 'drugstore', x: '70%', y: '50%', name: 'Drugstore', type: 'scenery' },
    { id: 'security_camera', x: '65%', y: '35%', name: 'Security Camera', type: 'evidence', evidenceId: 'security_footage' },
    { id: 'store_receipt', x: '25%', y: '40%', name: 'Store Receipt', type: 'evidence', evidenceId: 'store_receipt' }
  ];

  const handleItemClick = (item: any) => {
    if (item.type === 'evidence' && !hasEvidence(item.evidenceId)) {
      collectEvidence(item.evidenceId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full"
    >
      {/* Neighbourhood background */}
      <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/157394491/photo/city-street-in-black-and-white.jpg?s=612x612&w=0&k=20&c=lMI3JYjjwfLOCXPhHLOpaJbnDUJPjecqYZLqlUaX31s=')] bg-cover bg-center" />
      
      {/* Dark overlay for better visibility of UI elements */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Scene title */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg z-10">
        <h1 className="text-xl font-medium">Neighbourhood</h1>
      </div>
      
      {/* Interactable items */}
      {neighbourhoodItems.map(item => (
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
      
      {/* Neighbourhood description */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 max-w-md bg-black bg-opacity-80 text-white p-4 rounded-lg mb-4">
        <p className="text-center">
          This is the neighbourhood where the drugstore robbery happened. If you look around here, you might find some evidence that shows you were somewhere else when the crime went down.
        </p>
      </div>
    </motion.div>
  );
};

export default Neighbourhood;