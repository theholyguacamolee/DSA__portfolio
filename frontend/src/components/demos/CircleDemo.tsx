import React, { useState } from 'react';

const API_URL = 'http://localhost:5000';

const CircleDemo = () => {
  const [radius, setRadius] = useState(5);
  const [area, setArea] = useState(78.54);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/circle/area`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ radius })
      });
      const data = await response.json();
      setArea(data.area);
    } catch (error) {
      console.error('Error calculating area:', error);
      alert('Backend not running. Start Flask server first!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-[#0b0b0b] text-white min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Area of a Circle</h2>
        <p className="text-sm text-gray-400 text-center mb-8">🐍 Powered by Python + Flask</p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <label className="text-lg">Radius:</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value) || 0)}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white w-32 text-center"
            />
          </div>

          <button
            onClick={calculate}
            disabled={loading}
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 disabled:opacity-50 font-semibold"
          >
            {loading ? 'Calculating...' : 'Calculate Area'}
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm mb-2">Result:</p>
            <p className="text-3xl font-bold text-blue-400">{area.toFixed(3)}</p>
            <p className="text-gray-500 text-sm mt-1">square units</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleDemo;
