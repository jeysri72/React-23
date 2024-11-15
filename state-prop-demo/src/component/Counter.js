import React, { useState } from 'react';
import Display from './Display'; // Import the Display component

function Counter() {
  // Initialize state for the count value
  const [count, setCount] = useState(0); // `count` is the state variable, `setCount` is the function to update it

  // Function to increase the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      {/* Display component to show current count, passing count as a prop */}
      <Display count={count} />

      {/* Button to increment the count */}
      <button onClick={increment}>Increment</button>
      
      {/* Button to decrement the count */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

{/*

    class Counter:
    def __init__(self, initial_value=0):
        """
        Initializes the counter with an initial value (default is 0).
        """
        self.value = initial_value

    def increment(self):
        """
        Increases the counter value by 1.
        """
        self.value += 1
        print(f"Counter incremented. Current value: {self.value}")

    def decrement(self):
        """
        Decreases the counter value by 1.
        """
        self.value -= 1
        print(f"Counter decremented. Current value: {self.value}")

    def get_value(self):
        """
        Returns the current counter value.
        """
        return self.value

# Example usage:
counter = Counter(10)  # Initialize counter with 10

# Increment the counter
counter.increment()  # Counter incremented. Current value: 11

# Decrement the counter
counter.decrement()  # Counter decremented. Current value: 10

# Get current counter value
print(f"Current counter value: {counter.get_value()}")  # Current counter value: 10

*/}