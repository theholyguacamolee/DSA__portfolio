import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000';

const LinkedListDemo = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<{ msg: string; type: string }[]>([]);
  const [sessionId] = useState(() => `session_${Date.now()}`);

  const addLog = (msg: string, type = 'info') => {
    setLogs((prev) => [...prev, { msg, type }]);
  };

  const apiCall = async (endpoint: string, body: any = {}) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, ...body })
      });
      return await response.json();
    } catch (error) {
      addLog('Backend error. Start Flask server!', 'error');
      throw error;
    }
  };

  const insertBegin = async () => {
    if (!input.trim()) return addLog('Enter a value', 'error');
    const data = await apiCall('/api/linkedlist/insert-beginning', { value: input.trim() });
    setItems(data.items);
    addLog(`Inserted "${input.trim()}" at beginning`, 'success');
    setInput('');
  };

  const insertEnd = async () => {
    if (!input.trim()) return addLog('Enter a value', 'error');
    const data = await apiCall('/api/linkedlist/insert-end', { value: input.trim() });
    setItems(data.items);
    addLog(`Inserted "${input.trim()}" at end`, 'success');
    setInput('');
  };

  const removeBegin = async () => {
    const data = await apiCall('/api/linkedlist/remove-beginning');
    if (data.error) {
      addLog('List is empty', 'error');
    } else {
      setItems(data.items);
      addLog(`Removed "${data.removed}"`, 'success');
    }
  };

  const removeEnd = async () => {
    const data = await apiCall('/api/linkedlist/remove-end');
    if (data.error) {
      addLog('List is empty', 'error');
    } else {
      setItems(data.items);
      addLog(`Removed "${data.removed}"`, 'success');
    }
  };

  const searchItem = async () => {
    if (!input.trim()) return addLog('Enter a value', 'error');
    const data = await apiCall('/api/linkedlist/search', { value: input.trim() });
    addLog(data.found ? `✓ Found "${input.trim()}"` : `✗ "${input.trim()}" not found`, data.found ? 'success' : 'error');
    setInput('');
  };

  const clear = async () => {
    const data = await apiCall('/api/linkedlist/clear');
    setItems(data.items);
    addLog('Cleared', 'info');
  };

  const runDemo = async () => {
    await clear();
    setLogs([]);
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    addLog('=== Sushi Preparation Demo ===', 'info');
    await wait(600);
    
    let data = await apiCall('/api/linkedlist/insert-end', { value: 'prepare' });
    setItems(data.items);
    addLog('1. Added "prepare" at end', 'info');
    await wait(600);
    
    data = await apiCall('/api/linkedlist/insert-end', { value: 'roll' });
    setItems(data.items);
    addLog('2. Added "roll" at end', 'info');
    await wait(600);
    
    data = await apiCall('/api/linkedlist/insert-beginning', { value: 'assemble' });
    setItems(data.items);
    addLog('3. Added "assemble" at beginning', 'info');
    await wait(600);
    
    const searchData = await apiCall('/api/linkedlist/search', { value: 'roll' });
    addLog(`4. Search "roll": ${searchData.found}`, 'success');
    await wait(600);
    
    data = await apiCall('/api/linkedlist/remove-beginning');
    setItems(data.items);
    addLog(`5. Removed "${data.removed}"`, 'success');
    await wait(600);
    
    data = await apiCall('/api/linkedlist/remove-end');
    setItems(data.items);
    addLog(`6. Removed "${data.removed}"`, 'success');
    await wait(600);
    
    addLog('=== Demo Complete ===', 'success');
  };

  return (
    <div className="p-6 bg-[#0b0b0b] text-white min-h-[70vh] flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-center mb-2">🔗 Linked List Demo</h1>
        <p className="text-sm text-gray-400 text-center mb-6">🐍 Powered by Python + Flask</p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && insertEnd()}
            placeholder="Enter value"
            className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white"
          />
          <button onClick={insertBegin} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold">Insert Begin</button>
          <button onClick={insertEnd} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold">Insert End</button>
          <button onClick={removeBegin} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-semibold">Remove Begin</button>
          <button onClick={removeEnd} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-semibold">Remove End</button>
          <button onClick={searchItem} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold">Search</button>
          <button onClick={clear} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-semibold">Clear</button>
          <button onClick={runDemo} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-semibold">Run Demo</button>
        </div>

        <div className="bg-black rounded-lg p-8 mb-6 min-h-[180px] flex items-center justify-center overflow-x-auto">
          <div className="flex items-center gap-4">
            {items.length === 0 ? (
              <div className="text-gray-500 italic">Empty list</div>
            ) : (
              items.map((d, i) => (
                <React.Fragment key={i}>
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg px-5 py-3 min-w-[70px] text-center">
                    {i === 0 && <div className="absolute -top-6 left-0 text-xs text-green-400 font-bold">HEAD</div>}
                    {i === items.length - 1 && <div className="absolute -top-6 right-0 text-xs text-orange-400 font-bold">TAIL</div>}
                    <div className="font-bold text-lg">{d}</div>
                  </div>
                  {i < items.length - 1 && <div className="text-gray-600 text-2xl">→</div>}
                </React.Fragment>
              ))
            )}
          </div>
        </div>

        <div className="bg-black rounded-lg p-4 max-h-[150px] overflow-y-auto font-mono text-sm">
          {logs.length === 0 ? (
            <div className="text-gray-500 italic">Logs will appear here...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className={`${log.type === 'success' ? 'text-green-400' : log.type === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
                &gt; {log.msg}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkedListDemo;
