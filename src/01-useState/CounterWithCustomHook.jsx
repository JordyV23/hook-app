import { useCounter } from "../hooks/useCouter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, dencrement } = useCounter();

  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={()=>increment(2)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-secondary" onClick={()=>dencrement(5)}>
        -1
      </button>
    </>
  );
};
