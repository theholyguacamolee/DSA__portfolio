import React, { useState } from 'react';

class Node {
  data: string;
  next: Node | null;
  constructor(data: string) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;

  insert_at_beginning(data: string) {
    const n = new Node(data);
    if (this.head) {
      n.next = this.head;
      this.head = n;
    } else {
      this.head = this.tail = n;
    }
  }

  insert_at_end(data: string) {
    const n = new Node(data);
    if (this.head) {
      this.tail!.next = n;
      this.tail = n;
    } else {
      this.head = this.tail = n;
    }
  }

  remove_at_beginning() {
    if (!this.head) return null;
    const d = this.head.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return d;
  }

  remove_at_end() {
    if (!this.head) return null;
    const d = this.tail!.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let c = this.head;
      while (c.next !== this.tail) c = c.next!;
      c.next = null;
      this.tail = c;
    }
    return d;
  }

  search(data: string) {
    let c = this.head;
    while (c) {
      if (c.data === data) return true;
      c = c.next;
    }
    return false;
  }

  toArray() {
    const a: string[] = [];
    let c = this.head;
    while (c) {
      a.push(c.data);
      c = c.next;
    }
    return a;
  }
}

const LinkedListDemo = () => {
  const [list] = useState(() => new LinkedList());
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<{ msg: string; type: string }[]>([]);

  const render = () => setItems(list.toArray());

  const addLog = (msg: string, type = 'info') => {
    setLogs((prev) => [...prev, { msg, type }]);
  };

  const insertBegin = () => {
    if (!input.trim()) return addLog('Enter a value', 'error');
    list.insert_at_beginning(input.trim());
    addLog(`Inserted "${input.trim()}" at beginning`, 'success');
    setInput('');
    render();
  };

  const insertEnd = () => {
    if (!input.trim()) return addLog('Enter a value', 'error');
    list.insert_at_end(input.trim());
    addLog(`Inserted "${input.trim()}" at end`, 'success');
    setInput('');
    render();
  };

  const removeBegin = () => {
    const r = list.remove_at_beginning();
    r ? addLog(`Removed "${r}"`, 'success') : addLog('List is empty', 'error');
    render();
  };

  const removeEnd = () => {
    const r = list.remove_at_end();
    r ? addLog(`Removed "${r}"`, 'success') : addLog('List is empty', 'error');
    render();
  };

  const searchItem = () => {
    if (!input.trim()) return addLog('Enter a value', 'error');
    const f = list.search(input.trim());
    addLog(f ? `✓ Found "${input.trim()}"` : `✗ "${input.trim()}" not found`, f ? 'success' : 'error');
    setInput('');
  };

  const clear = () => {
    list.head = list.tail = null;
    addLog('Cleared');
    render();
  };

  const runDemo = async () => {
    clear();
    setLogs([]);
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    addLog('=== Sushi Preparation Demo ===', 'info');
    await wait(600);
    list.insert_at_end('prepare');
    addLog('1. Added "prepare" at end', 'info');
    render();
    await wait(600);
    list.insert_at_end('roll');
    addLog('2. Added "roll" at end', 'info');
    render();
    await wait(600);
    list.insert_at_beginning('assemble');
    addLog('3. Added "assemble" at beginning', 'info');
    render();
    await wait(600);
    addLog(`4. Search "roll": ${list.search('roll')}`, 'success');
    await wait(600);
    const r1 = list.remove_at_beginning();
    addLog(`5. Removed "${r1}"`, 'success');
    render();
    await wait(600);
    const r2 = list.remove_at_end();
    addLog(`6. Removed "${r2}"`, 'success');
    render();
    await wait(600);
    addLog('=== Demo Complete ===', 'success');
  };

  return (
    <div className="p-6 bg-[#0b0b0b] text-white min-h-[70vh]">
      <h1 className="text-2xl font-bold text-center mb-6">🔗 Linked List Demo</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && insertEnd()}
          placeholder="Enter value"
          className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white"
        />
        <button onClick={insertBegin} className="btn-primary px-4 py-2">Insert Begin</button>
        <button onClick={insertEnd} className="btn-primary px-4 py-2">Insert End</button>
        <button onClick={removeBegin} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">Remove Begin</button>
        <button onClick={removeEnd} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">Remove End</button>
        <button onClick={searchItem} className="btn-secondary px-4 py-2">Search</button>
        <button onClick={clear} className="btn-secondary px-4 py-2">Clear</button>
        <button onClick={runDemo} className="btn-secondary px-4 py-2">Run Demo</button>
      </div>

      <div className="bg-black rounded-lg p-8 mb-4 min-h-[180px] flex items-center justify-center overflow-x-auto">
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
        {logs.map((log, i) => (
          <div key={i} className={`${log.type === 'success' ? 'text-green-400' : log.type === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
            &gt; {log.msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedListDemo;
