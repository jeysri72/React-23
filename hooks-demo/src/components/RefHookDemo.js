import React, { useRef } from 'react';

// RefHook for  
// 1. DOM Manipulation
// 2. Focus Management
// 3. Animations
// 4. Measuring Elements
// 5. Handling Events
// 6. Portals
// 7. Context API
// 8. Forwarding Refs

function RefHookDemo() {
  const inputRef = useRef();

  const focusInput = () => {
    // Step 1: Focus the input element using useRef
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Hook Demo</h2>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default RefHookDemo;
