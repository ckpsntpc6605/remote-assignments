import React, { useState } from "react";

export default function Counter({ id, count }) {
  const [countOne, setCountOne] = useState(0);
  function plusOne() {
    setCountOne((prevcount) => prevcount + 1);
  }
  return (
    <div>
      <button onClick={plusOne}>+1</button>
      <span>{count + countOne}</span>
    </div>
  );
}
