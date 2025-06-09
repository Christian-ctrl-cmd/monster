import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Link, ArrowRight, Check, X } from 'lucide-react';

const EvidenceBoard = () => {
  const { evidence, collectedEvidence, trustScore, updateGameProgress, setScene } = useGameStore();
  const [connections, setConnections] = useState<string[][]>([]);
  const [draggingEvidence, setDraggingEvidence] = useState<string | null>(null);
  const [droppingEvidence, setDroppingEvidence] = useState<string | null>(null);
  const [showVerdict, setShowVerdict] = useState(false);
  
  // Calculate progress based on collected evidence and connections
  useEffect(() => {
    const progressPercentage = Math.min(100, Math.floor((collectedEvidence.length * 10) + (connections.length * 5)));
    updateGameProgress(progressPercentage);
    
    // Show verdict option if player has collected at least 3 pieces of evidence OR has high trust score
    if (collectedEvidence.length >= 3 || trustScore >= 60) {
      setShowVerdict(true);
    }
  }, [collectedEvidence.length, connections.length, trustScore, updateGameProgress]);

  const handleDragStart = (evidenceId: string) => {
    setDraggingEvidence(evidenceId);
  };

  const handleDragEnter = (evidenceId: string) => {
    if (draggingEvidence && draggingEvidence !== evidenceId) {
      setDroppingEvidence(evidenceId);
    }
  };

  const handleDragEnd = () => {
    if (draggingEvidence && droppingEvidence) {
      // Check if connection already exists
      const connectionExists = connections.some(
        conn => (conn[0] === draggingEvidence && conn[1] === droppingEvidence) ||
                (conn[0] === droppingEvidence && conn[1] === draggingEvidence)
      );
      
      if (!connectionExists) {
        setConnections([...connections, [draggingEvidence, droppingEvidence]]);
      }
    }
    
    setDraggingEvidence(null);
    setDroppingEvidence(null);
  };

  const goToEnding = () => {
    setScene('ending');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full bg-journal-100 p-4 pt-16"
    >
      {/* Scene title */}
      <div className="absolute top-4 left-4 bg-journal-800 text-white px-4 py-2 rounded-lg z-10 flex items-center">
        <h1 className="text-xl font-medium">Evidence Board</h1>
        <div className="ml-4 bg-white bg-opacity-20 px-3 py-1 rounded-full">
          <span className="text-sm">Trust Score: {trustScore}%</span>
        </div>
      </div>
      
      {/* Evidence board instructions */}
      <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold mb-2">Case Analysis</h2>
        <p className="text-gray-700 mb-4">
          Drag pieces of evidence and connect them to build your case. Find relationships between different pieces to strengthen your defense.
        </p>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span>Strong evidence</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <span>Medium evidence</span>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-accent-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${Math.min(100, (collectedEvidence.length / 6) * 100)}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Evidence collected: {collectedEvidence.length}/9 
          {collectedEvidence.length >= 3 && " - You can now present your case!"}
        </p>
      </div>
      
      {/* Evidence board */}
      <div className="relative max-w-5xl mx-auto bg-journal-200 rounded-lg p-6 min-h-[500px] shadow-inner">
        {/* Cork board texture */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1310711/pexels-photo-1310711.jpeg')] bg-cover bg-center opacity-20 rounded-lg" />
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {connections.map((conn, index) => {
            const startEl = document.getElementById(`evidence-${conn[0]}`);
            const endEl = document.getElementById(`evidence-${conn[1]}`);
            
            if (!startEl || !endEl) return null;
            
            const startRect = startEl.getBoundingClientRect();
            const endRect = endEl.getBoundingClientRect();
            const svgRect = startEl.parentElement?.getBoundingClientRect();
            
            if (!svgRect) return null;
            
            const x1 = startRect.left - svgRect.left + startRect.width / 2;
            const y1 = startRect.top - svgRect.top + startRect.height / 2;
            const x2 = endRect.left - svgRect.left + endRect.width / 2;
            const y2 = endRect.top - svgRect.top + endRect.height / 2;
            
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#dc2626"
                strokeWidth="2"
                strokeDasharray="4"
              />
            );
          })}
        </svg>
        
        {/* Evidence cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-20">
          {collectedEvidence.map((evidenceId) => {
            const item = evidence[evidenceId];
            
            // Determine evidence strength color
            const strengthColor = 
              item.importance >= 10 ? 'border-green-500' :
              item.importance >= 5 ? 'border-yellow-500' :
              'border-red-500';
            
            return (
              <div
                id={`evidence-${item.id}`}
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item.id)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={() => handleDragEnter(item.id)}
                onDragEnd={handleDragEnd}
                className={`evidence-card ${strengthColor} ${
                  draggingEvidence === item.id ? 'ring-2 ring-primary-500' :
                  droppingEvidence === item.id ? 'ring-2 ring-accent-500' : ''
                }`}
              >
                <div className="flex mb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden mr-3">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <Link size={12} className="text-gray-500 mr-1" />
                      <span className="text-xs text-gray-500">Drag to connect</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* No evidence message */}
        {collectedEvidence.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <p className="text-center">No evidence collected yet. Visit locations to search for clues.</p>
            <ArrowRight className="mt-2" />
          </div>
        )}
      </div>
      
      {/* Verdict button - Always show if evidence collected or high trust score */}
      {showVerdict && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <button
            onClick={goToEnding}
            className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-bold inline-flex items-center transition-colors"
          >
            Present Your Case to the Jury <ArrowRight size={18} className="ml-2" />
          </button>
          <p className="text-sm text-gray-600 mt-2">
            You have collected {collectedEvidence.length} piece{collectedEvidence.length !== 1 ? 's' : ''} of evidence. 
            Present your case to see how the jury responds.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EvidenceBoard;