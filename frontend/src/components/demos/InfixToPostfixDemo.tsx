import React, { useState } from 'react';

const API_URL = 'http://localhost:5000';

const InfixToPostfixDemo = () => {
  const [infix, setInfix] = useState('');
  const [postfix, setPostfix] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    setError('');
    setPostfix('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/infix-to-postfix`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ infix })
      });

      const data = await response.json();

      if (response.ok) {
        setPostfix(data.postfix);
      } else {
        setError(data.error || 'Conversion failed');
      }
    } catch (err) {
      setError('Backend not running. Start Flask server first!');
    } finally {
      setLoading(false);
    }
  };

  const examples = [
    { label: 'Simple', value: 'A + B' },
    { label: 'Precedence', value: 'A + B * C' },
    { label: 'Parentheses', value: '(A + B) * C' },
    { label: 'Complex', value: 'A * B + C / D - E' },
    { label: 'Advanced', value: '(A + B) * (C - D) / E' }
  ];

  const loadExample = (example: string) => {
    setInfix(example);
    setPostfix('');
    setError('');
  };

  return (
    <div className="p-6 bg-[#0b0b0b] text-white min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-2">📊 Infix to Postfix Converter</h2>
        <p className="text-sm text-gray-400 text-center mb-2">Shunting Yard Algorithm</p>
        <p className="text-sm text-gray-400 text-center mb-8">🐍 Powered by Python + Flask</p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full">
            <label className="block mb-2 text-center text-lg font-semibold">Infix Expression:</label>
            <input
              type="text"
              value={infix}
              onChange={(e) => setInfix(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && convert()}
              placeholder="e.g., A + B * C"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white text-center text-lg"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              Supported: + - * / ^ ( )
            </p>
          </div>

          <div className="w-full">
            <p className="text-sm text-gray-400 text-center mb-2">Quick Examples:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {examples.map((ex) => (
                <button
                  key={ex.label}
                  onClick={() => loadExample(ex.value)}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded border border-gray-600"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={convert}
            disabled={loading || !infix.trim()}
            className="px-8 py-3 bg-white text-black rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
          >
            {loading ? 'Converting...' : 'Convert to Postfix'}
          </button>

          {postfix && (
            <div className="w-full bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-600 rounded-lg p-6">
              <label className="block mb-3 text-center text-gray-300 text-sm">Postfix Expression:</label>
              <p className="text-3xl font-bold text-green-400 text-center break-words">
                {postfix}
              </p>
            </div>
          )}

          {error && (
            <div className="w-full bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-600 rounded-lg p-4">
              <p className="text-red-400 text-center font-semibold">❌ {error}</p>
            </div>
          )}

          <div className="w-full mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <h3 className="text-sm font-bold text-gray-300 mb-2">📚 How it works:</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Uses the <strong>Shunting Yard Algorithm</strong> by Edsger Dijkstra</li>
              <li>• Respects operator precedence: ^ {'>'} * / {'>'} + -</li>
              <li>• Handles parentheses to override default precedence</li>
              <li>• Converts infix to stack-friendly postfix notation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfixToPostfixDemo;
