import { useState, useRef } from "react";
import Counter from "./Counter";

function App() {
  const count = useRef(1);
  const [counters, setCounters] = useState([
    {
      id: 1,
      count: 0,
    },
    {
      id: 2,
      count: 0,
    },
    {
      id: 3,
      count: 0,
    },
  ]);
  const plusAll = () => {
    setCounters((prevCounter) =>
      prevCounter.map((counter) => {
        return { id: counter.id, count: counter.count++ };
      })
    );
  };
  // const plusAll = () => {
  //   setCounters((prevCounter) =>
  //     prevCounter.map((counter) => {
  //       return counter.count++;
  //     })
  //   );
  // };    Why can not work and return NAN ?

  const counterId = useRef(4);
  const addNewCounter = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      {
        id: counterId.current,
        count: 0,
      },
    ]);
    counterId.current = counterId.current + 1;
    console.log(counterId.current);
  };

  return (
    <div>
      <button className="all" onClick={plusAll}>
        All + 1
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id} id={counter.id} count={counter.count} />
      ))}

      <button className="add" onClick={addNewCounter}>
        Add a Counter
      </button>
    </div>
  );
}

export default App;
