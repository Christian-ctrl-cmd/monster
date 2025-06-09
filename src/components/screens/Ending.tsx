import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { RotateCcw, BookOpen } from 'lucide-react';

const Ending = () => {
  const { setScene, trustScore, collectedEvidence } = useGameStore();

  const getEnding = () => {
    if (trustScore >= 70 && collectedEvidence.length >= 2) {
      return {
        title: "Not Guilty, eh?",
        description: "The jury believes your story, buddy. You're going home.",
        color: "green"
      };
    } else if (trustScore >= 40) {
      return {
        title: "Hung Jury, eh?",
        description: "The jury can't decide, buddy. There might be a retrial.",
        color: "yellow"
      };
    } else {
      return {
        title: "Guilty, buddy",
        description: "The jury thinks you're guilty, eh? You're going to prison.",
        color: "red"
      };
    }
  };

  const ending = getEnding();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center p-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
            ending.color === 'green' ? 'text-green-400' :
            ending.color === 'yellow' ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {ending.title}
          </h1>
          <p className="text-xl text-gray-300">
            {ending.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Your Story, eh?</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Trust Score: {trustScore}/100, buddy
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Evidence Collected: {collectedEvidence.length}/3, eh?
          </p>
          <p className="text-gray-300 leading-relaxed">
            In the end, the truth is complicated, you know? Maybe you were involved, maybe you weren't, buddy. 
            But one thing's for sure - this experience changed you forever, eh?
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <button
            onClick={() => setScene('title')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            <RotateCcw size={24} />
            Play Again, eh?
          </button>
          
          <p className="text-gray-400 text-sm">
            Based on the novel "Monster" by Walter Dean Myers, buddy
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Ending;