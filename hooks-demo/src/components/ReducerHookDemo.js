import React, { useReducer } from 'react';

// Step 1: Define the reducer function 
// This function will handle the state changes based on the actions dispatched to it
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function ReducerHookDemo() {
  // Step 2: Use useReducer to manage state with a reducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>useReducer Hook Demo</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default ReducerHookDemo;
