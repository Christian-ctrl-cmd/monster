import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

const EvidencePanel = () => {
  const { evidence, collectedEvidence } = useGameStore();
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);

  const availableEvidence = collectedEvidence.map(id => evidence[id]);

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-white text-gray-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="flex h-[300px] md:h-[400px]">
        {/* Evidence list */}
        <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto border-r border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-900">Evidence, eh?</h3>
          {availableEvidence.length === 0 ? (
            <p className="text-gray-600 text-sm">No evidence collected yet, buddy</p>
          ) : (
            <div className="space-y-2">
              {availableEvidence.map(item => (
                <button
                  key={item.id}
                  onClick={() => setSelectedEvidence(item.id)}
                  className={`w-full text-left p-2 rounded transition-colors ${
                    selectedEvidence === item.id ? 'bg-primary-200 text-primary-900' : 'hover:bg-gray-200'
                  }`}
                >
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-600">Importance: {item.importance}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Evidence details */}
        <div className="w-2/3 p-6 overflow-y-auto">
          {selectedEvidence && evidence[selectedEvidence] ? (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {evidence[selectedEvidence].name}
              </h2>
              <div className="mb-4">
                <img 
                  src={evidence[selectedEvidence].image} 
                  alt={evidence[selectedEvidence].name}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {evidence[selectedEvidence].description}
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Location found:</strong> {evidence[selectedEvidence].location}</p>
                <p><strong>Importance:</strong> {evidence[selectedEvidence].importance}/20</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              {availableEvidence.length === 0 ? (
                <p>Collect some evidence first, buddy!</p>
              ) : (
                <p>Select evidence to view details, eh?</p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EvidencePanel;