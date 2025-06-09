import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

const EvidencePanel = () => {
  const { evidence, collectedEvidence } = useGameStore();
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(
    collectedEvidence.length > 0 ? collectedEvidence[0] : null
  );

  const collectedItems = collectedEvidence.map(id => evidence[id]);

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-gray-100 text-gray-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="flex h-[300px] md:h-[400px]">
        {/* Evidence list */}
        <div className="w-1/3 bg-gray-200 p-4 overflow-y-auto border-r border-gray-300">
          <h3 className="font-sans text-lg font-bold mb-4 text-gray-900">Evidence ({collectedEvidence.length}/9)</h3>
          
          {collectedItems.length === 0 ? (
            <p className="text-gray-600 italic">No evidence collected yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {collectedItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setSelectedEvidence(item.id)}
                  className={`evidence-card border-l-accent-500 ${
                    selectedEvidence === item.id ? 'ring-2 ring-accent-500' : 'hover:bg-gray-50'
                  }`}
                >
                  <p className="font-semibold text-xs truncate">{item.name}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Evidence details */}
        <div className="w-2/3 p-6 overflow-y-auto bg-white">
          {selectedEvidence && evidence[selectedEvidence] ? (
            <div>
              <h2 className="font-sans text-2xl font-bold mb-4 text-gray-900">
                {evidence[selectedEvidence].name}
              </h2>
              
              <div className="mb-4 max-w-xs mx-auto">
                <img 
                  src={evidence[selectedEvidence].image} 
                  alt={evidence[selectedEvidence].name}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <p className="text-gray-800 mb-4">
                {evidence[selectedEvidence].description}
              </p>
              
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Importance to your case:</p>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-accent-500 h-2.5 rounded-full" 
                    style={{ width: `${evidence[selectedEvidence].importance * 6.67}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Select evidence to view details</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EvidencePanel;