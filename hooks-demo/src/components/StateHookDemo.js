import React, { useState } from 'react';

function StateHookDemo() {
  // Step 1: Declare state variable `count` with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Hook Demo</h2>
      <p>Count: {count}</p>
      {/* Step 2: Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default StateHookDemo;
