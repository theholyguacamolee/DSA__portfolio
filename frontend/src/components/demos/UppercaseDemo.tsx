import React, { useState } from 'react';

const API_URL = 'http://localhost:5000';

const UppercaseDemo = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/uppercase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });
      const data = await response.json();
      setOutput(data.result);
    } catch (error) {
      console.error('Error converting text:', error);
      alert('Backend not running. Start Flask server first!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-[#0b0b0b] text-white min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Convert Text to Uppercase</h2>
        <p className="text-sm text-gray-400 text-center mb-8">🐍 Powered by Python + Flask</p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full">
            <label className="block mb-2 text-center text-lg">Input Text:</label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && convert()}
              placeholder="Type something..."
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white text-center"
            />
          </div>

          <button
            onClick={convert}
            disabled={loading}
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 disabled:opacity-50 font-semibold"
          >
            {loading ? 'Converting...' : 'Convert to Uppercase'}
          </button>

          <div className="w-full text-center mt-4">
            <label className="block mb-2 text-gray-400 text-sm">Output:</label>
            <p className="text-2xl font-bold text-purple-400 break-words">{output || '—'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UppercaseDemo;
