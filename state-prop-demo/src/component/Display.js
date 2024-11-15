import React from 'react';

function Display({ count }) { // `count` is received as a prop
  return (
    <div>
      <h3>Current Count: {count}</h3>
    </div>
  );
}

export default Display;
