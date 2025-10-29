import React, { useState } from 'react';

const CircleDemo = () => {
  const [radius, setRadius] = useState(5);
  const [area, setArea] = useState(Math.PI * 5 * 5);

  const calculate = () => {
    const newArea = Math.PI * radius * radius;
    setArea(newArea);
  };

  return (
    <div className="p-6 bg-[#0b0b0b] text-white min-h-[70vh] flex items-center justify-center">
      <div className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-6">Area of a Circle</h2>
        
        <div className="mb-4">
          <label className="mr-2">Radius:</label>
          <input
            type="number"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value) || 0)}
            className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white"
          />
          <button
            onClick={calculate}
            className="ml-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
          >
            Calculate
          </button>
        </div>

        <p className="text-gray-300">Area: {area.toFixed(3)}</p>
      </div>
    </div>
  );
};

export default CircleDemo;
