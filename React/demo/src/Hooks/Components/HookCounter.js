import { useState } from "react";

const HookCounter = () => {

    const defaultVal = 5;

    const [count, setCount] = useState(defaultVal);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCounter = () => {
        setCount(defaultVal);
    }
    return (
      <>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Hook Increment Counter</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </>
    );
}

export default HookCounter;