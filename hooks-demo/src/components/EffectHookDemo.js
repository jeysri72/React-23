import React, { useState, useEffect } from 'react';


function EffectHookDemo() {
  const [count, setCount] = useState(0);

  // Step 1: useEffect hook to run side-effect when `count` changes
  useEffect(() => {
    document.title = `You clicked ${count} times`; // Update the document title
  }, [count]); // Dependency array: run effect only when `count` changes

  return (
    <div>
      <h2>useEffect Hook Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectHookDemo;
