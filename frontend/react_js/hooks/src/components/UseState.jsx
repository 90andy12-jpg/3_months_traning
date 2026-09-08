import React from 'react'
import { useState } from 'react'

function useStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>UseState Example</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 10)}>
        increment count
      </button>
    </div>
  );
}

export default useStateExample;

 
