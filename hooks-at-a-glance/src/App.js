import React, { useState } from 'react';

export default () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div>
        <p>You clicked {count1} times (count1)</p>
        <button onClick={() => setCount1(count1 + 1)}>Click me</button>
      </div>

      <div>
        <p>You clicked {count2} times (count2)</p>
        <button onClick={() => setCount2(count2 + 1)}>Click me</button>
      </div>
    </>
  );
};
