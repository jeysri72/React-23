import React, { useState, useCallback } from 'react';



function CallbackHookDemo() {
  const [count, setCount] = useState(0);

  // Step 1: useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]); // Memoize the function only when setCount changes


//   const memoizedFunction = useCallback(() => {
//     // function body
//   }, [dependencies]);

  
  return (
    <div>
      <h2>useCallback Hook Demo</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CallbackHookDemo;
