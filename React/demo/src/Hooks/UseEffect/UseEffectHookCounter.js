import { useEffect, useState } from "react";

const UseEffectHookCounter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // useEffect(() => {
    //     console.log("Updating")
    //   document.title = `Counter value is ${count}`;
    // }, [count]);

    useEffect(() => {
        console.log("HOOKS FOR FIRST TIME");
    },[])

    const incrementCount = () => {
        setCount(count + 1);
    }

    const changeHandler = (e) => {
        setName(e.target.value);
    }
    return (
      <>
        <input type="text" value={name} onChange={changeHandler} />
        <h1>{count}</h1>
        <button onClick={incrementCount}>Increment</button>
      </>
    );
}

export default UseEffectHookCounter;