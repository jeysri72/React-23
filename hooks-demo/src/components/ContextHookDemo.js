import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const CountContext = createContext();

function ContextHookDemo() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <h2>useContext Hook Demo</h2>
      <ChildComponent />
    </CountContext.Provider>
  );
}

// Step 2: Child Component that consumes the context
function ChildComponent() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>Count from Context: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ContextHookDemo;
