import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Search, FileText, Camera, ArrowLeft } from 'lucide-react';

const EvidenceBoard = () => {
  const { setScene, evidence, collectedEvidence, collectEvidence } = useGameStore();

  const availableEvidence = Object.values(evidence).filter(item => 
    item.location === 'evidence-board' || collectedEvidence.includes(item.id)
  );

  const handleCollectEvidence = (evidenceId: string) => {
    collectEvidence(evidenceId);
  };

  const handleGoBack = () => {
    setScene('neighborhood');
  };

  const handleGoToEnding = () => {
    setScene('ending');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 relative"
    >
      <div className="relative z-10 min-h-screen px-6 py-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-300">
            <div className="flex items-centre justify-between mb-8">
              <div className="flex items-centre gap-3">
                <Search className="text-gray-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Evidence Board</h2>
              </div>
              <button
                onClick={handleGoBack}
                className="flex items-centre gap-2 text-gray-600 hover:text-gray-800 transition-colours"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                Look at all the evidence carefully. What really happened that day? 
                What pieces fit together to tell the true story?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {availableEvidence.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`evidence-card ${item.found ? 'border-green-500' : 'border-gray-300'} cursor-pointer`}
                  onClick={() => !item.found && handleCollectEvidence(item.id)}
                >
                  <div className="flex items-centre gap-3 mb-3">
                    <Camera className={item.found ? 'text-green-500' : 'text-gray-400'} size={20} />
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="flex justify-between items-centre">
                    <span className={`text-xs px-2 py-1 rounded ${item.found ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                      {item.found ? 'Found' : 'Click to Examine'}
                    </span>
                    <span className="text-xs text-gray-500">
                      Importance: {item.importance}/10
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-centre">
              <button
                onClick={handleGoToEnding}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-centre gap-2 mx-auto"
              >
                <FileText size={20} />
                <span>Reach Your Conclusion</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EvidenceBoard;