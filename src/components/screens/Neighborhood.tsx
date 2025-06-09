import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Home, MapPin, Camera } from 'lucide-react';

const Neighborhood = () => {
  const { setScene, collectEvidence, startDialogue } = useGameStore();

  const handleExploreStore = () => {
    collectEvidence('store-layout');
    startDialogue('neighborhood-store');
  };

  const handleTalkToNeighbors = () => {
    startDialogue('osvaldo-meeting');
  };

  const handleGoToEvidenceBoard = () => {
    setScene('evidence-board');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 relative"
    >
      {/* Neighborhood background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M0 0h40v40H0z"/%3E%3Cpath d="M40 40h40v40H40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-centre items-centre px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto text-centre"
        >
          <div className="bg-white rounded-lg shadow-2xl p-8 border border-blue-200">
            <div className="flex items-centre justify-centre gap-3 mb-6">
              <Home className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">Your Neighbourhood</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p className="text-lg">
                This is where you grew up. The streets you know, the people you've seen your whole life.
              </p>
              <p>
                But now everything feels different. People look at you strangely. 
                The corner store where it happened is just down the street.
              </p>
              <p className="text-blue-700 font-semibold">
                You need to remember what really happened that day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={handleExploreStore}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-centre gap-2"
              >
                <MapPin size={24} />
                <span>Visit the Store</span>
              </button>
              
              <button
                onClick={handleTalkToNeighbors}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-centre gap-2"
              >
                <Home size={24} />
                <span>Talk to Neighbours</span>
              </button>
              
              <button
                onClick={handleGoToEvidenceBoard}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-centre gap-2"
              >
                <Camera size={24} />
                <span>Look at Evidence</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
  );
};

export default Neighborhood;