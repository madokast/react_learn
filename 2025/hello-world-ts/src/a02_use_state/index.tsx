import React from 'react';

export default function A02UseState() { 
    const [count, setCount] = React.useState(0);

    function addOne() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={addOne}>Click me</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}