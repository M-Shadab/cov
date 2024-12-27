import React, { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    return <>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>INC</button>
    </>
}