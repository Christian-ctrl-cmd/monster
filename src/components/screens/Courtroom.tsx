import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Scale, FileText, Users } from 'lucide-react';

const Courtroom = () => {
  const { setScene, collectEvidence, hasEvidence } = useGameStore();

  const handleCollectEvidence = (evidenceId: string) => {
    collectEvidence(evidenceId);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100"
    >
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
              The Courtroom, eh?
            </h1>
            <p className="text-xl text-amber-700">
              This is where your future gets decided, buddy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Scale size={24} />
                The Trial, eh?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The prosecutor keeps calling you a "monster," buddy. She's trying to convince the jury that you were part of the robbery that went wrong. Your lawyer is doing her best to defend you, eh?
              </p>
              <p className="text-gray-700 leading-relaxed">
                The judge looks serious and the jury... well, they're hard to read, you know? Some of them won't even look at you, buddy.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={24} />
                The People, eh?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your mom sits in the back, trying not to cry, buddy. Your lawyer whispers strategies to you. The prosecutor points at you like you're already guilty, eh?
              </p>
              <p className="text-gray-700 leading-relaxed">
                The witnesses come and go, each telling their version of what happened that day. But which version is true, you know?
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText size={24} />
              Evidence Available, buddy
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleCollectEvidence('security-footage')}
                disabled={hasEvidence('security-footage')}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  hasEvidence('security-footage') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                <h4 className="font-semibold mb-2">Security Camera Footage, eh?</h4>
                <p className="text-sm">
                  {hasEvidence('security-footage') ? 'Collected, buddy!' : 'Click to examine the footage'}
                </p>
              </button>
              
              <button
                onClick={() => handleCollectEvidence('witness-testimony')}
                disabled={hasEvidence('witness-testimony')}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  hasEvidence('witness-testimony') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                <h4 className="font-semibold mb-2">Witness Statement, buddy</h4>
                <p className="text-sm">
                  {hasEvidence('witness-testimony') ? 'Collected, eh!' : 'Click to review the testimony'}
                </p>
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setScene('prison-cell')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Back to Cell, eh?
            </button>
            
            <button
              onClick={() => setScene('neighborhood')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Remember the Neighbourhood, buddy
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Courtroom;