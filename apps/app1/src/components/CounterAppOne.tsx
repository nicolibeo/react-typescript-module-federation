import React, { useState } from 'react';
import { Button } from '@libs/design-system';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Add by one each click <strong>APP-1</strong>
      </p>
      <p>Your click count : {count} </p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
};

export default Counter;
