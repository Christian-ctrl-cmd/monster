import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Search, FileText, Camera } from 'lucide-react';

const EvidenceBoard = () => {
  const { setScene, evidence, collectedEvidence, collectEvidence } = useGameStore();

  const availableEvidence = Object.values(evidence).filter(item => 
    item.location === 'evidence-board' || collectedEvidence.includes(item.id)
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Evidence Board, eh?
            </h1>
            <p className="text-xl text-gray-700">
              All the pieces of the puzzle, buddy
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Search size={24} />
              What We Know, eh?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">The Crime, buddy:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Mr. Nesbitt was killed during a drugstore robbery, eh?</li>
                  <li>• The robbers got away with some money and cigarettes, buddy</li>
                  <li>• There were multiple people involved, you know?</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">The Accusation, eh?:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• You're accused of being the lookout, buddy</li>
                  <li>• Witnesses say they saw you near the store, eh?</li>
                  <li>• The prosecution calls you a "monster," you know?</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {availableEvidence.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`bg-white rounded-lg p-6 shadow-lg border-l-4 ${
                  collectedEvidence.includes(item.id) 
                    ? 'border-green-500' 
                    : 'border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileText size={24} className="text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                    {!collectedEvidence.includes(item.id) && item.location === 'evidence-board' && (
                      <button
                        onClick={() => collectEvidence(item.id)}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                      >
                        Examine, eh?
                      </button>
                    )}
                    {collectedEvidence.includes(item.id) && (
                      <span className="text-green-600 font-semibold text-sm">
                        Collected, buddy!
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Defense, eh?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your lawyer is trying to prove that you weren't involved in the robbery, buddy. She's looking for evidence that shows you were just in the wrong place at the wrong time, eh?
            </p>
            <p className="text-gray-700 leading-relaxed">
              But the prosecution has witnesses and they're painting a picture of you as someone who helped plan this crime, you know? The question is: what really happened that day, buddy?
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setScene('courtroom')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Back to Court, eh?
            </button>
            
            <button
              onClick={() => setScene('neighborhood')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Visit Neighbourhood, buddy
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EvidenceBoard;