import React from 'react';
import { Trophy } from 'lucide-react';

const MathMemoryGameDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">משחק זיכרון מתמטי</h1>
      <h2 className="text-xl font-bold mb-6 text-white">שלב מספר 1</h2>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {[...Array(16)].map((_, index) => (
          <div key={index} className="w-16 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-2xl font-bold">
            {index === 2 ? '7 + 3' : index === 5 ? '10' : '?'}
          </div>
        ))}
      </div>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-full font-bold text-lg hover:bg-yellow-600 transition-colors duration-300">
        עבור לשלב הבא
      </button>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="text-center">
          <Trophy size={60} className="text-yellow-400 animate-bounce mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">כל הכבוד!</h2>
          <p className="text-lg text-white">סיימת את כל השלבים!</p>
        </div>
      </div>
    </div>
  );
};

export default MathMemoryGameDemo;
