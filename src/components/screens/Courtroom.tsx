import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Scale, Users, FileText } from 'lucide-react';

const Courtroom = () => {
  const { setScene, startDialogue, unlockJournalEntry } = useGameStore();

  const handleTalkToLawyer = () => {
    startDialogue('briggs-intro');
  };

  const handleWatchTrial = () => {
    unlockJournalEntry('trial-day1');
    startDialogue('trial-opening');
  };

  const handleGoToNeighborhood = () => {
    setScene('neighborhood');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 relative"
    >
      {/* Courtroom background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4a574" fill-opacity="0.1"%3E%3Cpath d="M0 0h100v100H0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-centre items-centre px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-centre"
        >
          <div className="bg-white rounded-lg shadow-2xl p-8 border border-amber-200">
            <div className="flex items-centre justify-centre gap-3 mb-6">
              <Scale className="text-amber-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">The Courtroom</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p className="text-lg">
                The courtroom is big and scary. There are lots of people here - the judge, lawyers, and people watching.
              </p>
              <p>
                Your lawyer, Mr. Briggs, sits next to you. He's supposed to help prove you're innocent.
              </p>
              <p className="text-amber-700 font-semibold">
                Everyone is staring at you. Some look angry. Some look scared.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={handleTalkToLawyer}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-centre gap-2"
              >
                <Users size={24} />
                <span>Talk to Your Lawyer</span>
              </button>
              
              <button
                onClick={handleWatchTrial}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-centre gap-2"
              >
                <FileText size={24} />
                <span>Watch the Trial</span>
              </button>
              
              <button
                onClick={handleGoToNeighborhood}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-centre gap-2"
              >
                <Scale size={24} />
                <span>Remember Your Neighbourhood</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
  );
};

export default Courtroom;