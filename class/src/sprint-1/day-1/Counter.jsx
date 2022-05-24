import React,{useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Add</button>
      <button onClick={() => setCount(count-1)}>sub</button>
      <button onClick={() => setCount(count*2)}>mul</button>
    </div>
  );
};
