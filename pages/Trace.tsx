import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LetterTracer from '../components/LetterTracer';
import { LETTERS } from '../data/letterPaths';

const Trace: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const letter = useMemo(() => LETTERS.find(l => l.id === id), [id]);

  if (!letter) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-500">Letter not found</h2>
        <button onClick={() => navigate('/alphabet')} className="ml-4 text-blue-500 underline">Go Back</button>
      </div>
    );
  }

  const handleComplete = () => {
    // Find next letter index
    const currentIndex = LETTERS.findIndex(l => l.id === id);
    if (currentIndex >= 0 && currentIndex < LETTERS.length - 1) {
      const nextLetter = LETTERS[currentIndex + 1];
      navigate(`/trace/${nextLetter.id}`);
    } else {
      navigate('/alphabet');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <LetterTracer letter={letter} onComplete={handleComplete} />
    </div>
  );
};

export default Trace;