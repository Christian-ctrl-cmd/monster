import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { MapPin, Clock, Users } from 'lucide-react';

const Neighborhood = () => {
  const { setScene, startDialogue } = useGameStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200"
    >
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
              The Neighbourhood, eh?
            </h1>
            <p className="text-xl text-blue-700">
              This is where it all happened, buddy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin size={20} />
                The Drugstore, eh?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is where Mr. Nesbitt got killed, buddy. You walked by here that day, but did you go inside? That's what everyone wants to know, eh?
              </p>
              <button
                onClick={() => startDialogue('neighborhood-drugstore')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Remember this place, buddy
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={20} />
                That Afternoon, eh?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You were just walking around, killing time before going home, buddy. Nothing special about it, you know? Just another day in the neighbourhood, eh?
              </p>
              <button
                onClick={() => startDialogue('neighborhood-timeline')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Think about the timeline, eh?
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                The People, buddy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bobo, King, Osvaldo... these guys were around the neighbourhood too, eh? Some of them are saying you were involved, buddy. But were you really?
              </p>
              <button
                onClick={() => startDialogue('neighborhood-people')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Remember the people, eh?
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Memory, eh?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You remember walking around that day, buddy. It was hot and you were bored. You saw some people you knew, maybe talked to a few of them, eh? But the details are fuzzy now. Everything's fuzzy when you're scared, you know?
            </p>
            <p className="text-gray-700 leading-relaxed">
              The prosecution says you were the lookout for the robbery, buddy. They say you gave the signal that the coast was clear, eh? But you don't remember doing that. You don't remember being part of any plan. So what really happened?
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setScene('courtroom')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Back to Court, eh?
            </button>
            
            <button
              onClick={() => setScene('evidence-board')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Check Evidence, buddy
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Neighborhood;