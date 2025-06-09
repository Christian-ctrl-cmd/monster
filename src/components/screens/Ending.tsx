import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { BookOpen, RotateCcw, Heart } from 'lucide-react';

const Ending = () => {
  const { trustScore, collectedEvidence, setScene, initializeGame } = useGameStore();

  const getEndingMessage = () => {
    if (trustScore >= 80 && collectedEvidence.length >= 5) {
      return {
        title: "Justice Served",
        message: "You found enough evidence to prove your innocence. The jury believes you, and you're found not guilty. You can go home to your family.",
        colour: "text-green-600",
        bgColour: "bg-green-50"
      };
    } else if (trustScore >= 60) {
      return {
        title: "Reasonable Doubt",
        message: "There wasn't enough clear evidence either way. The jury has some doubts, but they're not sure. Your future is still uncertain.",
        colour: "text-yellow-600",
        bgColour: "bg-yellow-50"
      };
    } else {
      return {
        title: "Guilty Verdict",
        message: "The jury doesn't believe your story. Without enough evidence to prove your innocence, they find you guilty. You'll spend years in prison.",
        colour: "text-red-600",
        bgColour: "bg-red-50"
      };
    }
  };

  const ending = getEndingMessage();

  const handleRestart = () => {
    initializeGame();
    setScene('title');
  };

  const handleGoToJournal = () => {
    setScene('prison-cell');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className={`min-h-screen ${ending.bgColour} relative flex items-centre justify-centre`}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-centre">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200"
        >
          <div className="mb-8">
            <h2 className={`text-4xl font-bold ${ending.colour} mb-4`}>
              {ending.title}
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
            <p className="text-xl">
              {ending.message}
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Your Story Summary:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Trust Score:</span> {trustScore}/100
                </div>
                <div>
                  <span className="font-medium">Evidence Found:</span> {collectedEvidence.length}/8
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 italic">
              "Sometimes the truth isn't enough. Sometimes people see what they want to see. 
              But your story matters, and how you tell it can change everything."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-centre">
            <button
              onClick={handleRestart}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-centre gap-2 justify-centre"
            >
              <RotateCcw size={20} />
              <span>Start Over</span>
            </button>
            
            <button
              onClick={handleGoToJournal}
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-centre gap-2 justify-centre"
            >
              <BookOpen size={20} />
              <span>Read Your Journal</span>
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-centre justify-centre gap-2 text-gray-500 text-sm">
              <Heart size={16} />
              <span>Thank you for experiencing Steve's story</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Ending;