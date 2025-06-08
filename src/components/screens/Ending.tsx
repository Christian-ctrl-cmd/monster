import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Home, RotateCcw } from 'lucide-react';

const Ending = () => {
  const { trustScore, collectedEvidence, setScene } = useGameStore();
  const [verdict, setVerdict] = useState<'guilty' | 'notGuilty' | null>(null);
  const [showingVerdict, setShowingVerdict] = useState(false);
  
  useEffect(() => {
    // Determine verdict based on trust score and collected evidence
    const timer = setTimeout(() => {
      if (trustScore >= 70 && collectedEvidence.length >= 5) {
        setVerdict('notGuilty');
      } else {
        setVerdict('guilty');
      }
      
      // Show verdict after a delay
      setTimeout(() => {
        setShowingVerdict(true);
      }, 3000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [trustScore, collectedEvidence]);

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-90" />
      
      {/* Typewriter effect for verdict deliberation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="z-10 text-center max-w-xl mx-auto px-4"
      >
        <h2 className="text-3xl font-serif mb-6">The Jury's Verdict</h2>
        
        {!showingVerdict ? (
          <div className="mb-12">
            <p className="text-xl mb-6">The jury is deliberating...</p>
            <div className="flex justify-center">
              <div className="w-4 h-4 bg-white rounded-full mx-1 animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="w-4 h-4 bg-white rounded-full mx-1 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-white rounded-full mx-1 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <p className="text-2xl font-bold mb-2">
                We, the jury, find the defendant, Steve Harmon...
              </p>
              <p className={`text-4xl font-bold mt-6 ${verdict === 'notGuilty' ? 'text-green-500' : 'text-red-500'}`}>
                {verdict === 'notGuilty' ? 'NOT GUILTY' : 'GUILTY'}
              </p>
            </div>
            
            <div className="prose prose-invert max-w-none mb-8">
              {verdict === 'notGuilty' ? (
                <p>
                  The evidence you collected successfully created reasonable doubt in the jury's mind. 
                  You have proven that you were not at the scene of the crime and were not involved in the robbery 
                  that led to Mr. Nesbitt's death. You can now return to your life, though the experience has 
                  changed you forever.
                </p>
              ) : (
                <p>
                  Despite your efforts, the jury found the prosecution's case convincing. The testimonies against you 
                  and the lack of sufficient contradictory evidence led to your conviction. You face a lengthy prison 
                  sentence for a crime you didn't commit, holding onto hope for an appeal.
                </p>
              )}
            </div>
            
            <div className="mt-12 screenplay bg-gray-900 p-6 rounded-lg max-w-2xl mx-auto text-left">
              <p className="uppercase text-gray-400 mb-2">FADE IN:</p>
              <p className="uppercase mb-4">INT. {verdict === 'notGuilty' ? "STEVE'S BEDROOM" : 'PRISON CELL'} - DAY</p>
              <p className="mb-4">
                Steve sits alone, deep in thought. His face shows the weight of all he has experienced.
              </p>
              <p className="uppercase text-gray-400 mb-2">STEVE (V.O.)</p>
              <p className="mb-4 pl-8">
                {verdict === 'notGuilty' 
                  ? "Was I ever really a monster? Or was that just what they needed me to be? I'm free now, but part of me will always be in that courtroom, fighting to prove who I really am."
                  : "Even in here, I'm not the monster they say I am. I know the truth. One day, I'll find a way to make them see it too. This isn't the end of my story."}
              </p>
              <p className="uppercase mb-0">FADE TO BLACK.</p>
            </div>
            
            <div className="mt-12 flex justify-center space-x-6">
              <button
                onClick={resetGame}
                className="bg-white text-black py-2 px-4 rounded-lg flex items-center"
              >
                <RotateCcw size={18} className="mr-2" />
                Play Again
              </button>
              <button
                onClick={() => setScene('title')}
                className="bg-primary-600 text-white py-2 px-4 rounded-lg flex items-center"
              >
                <Home size={18} className="mr-2" />
                Main Menu
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Ending;