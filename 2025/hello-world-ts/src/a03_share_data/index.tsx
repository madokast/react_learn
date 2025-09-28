import { useState } from 'react';

interface SubButtonProps {
    initialCount: number;
    addTotalCount: (count:number) => void;
}

function SubButton({initialCount, addTotalCount}: SubButtonProps) {
    const [count, setCount] = useState(initialCount);

    function handleClick() {
        setCount(count + 1);
        addTotalCount(1);
    }

    return (
        <div>
            <button onClick={handleClick}>Clicked {count} times</button>
        </div>
    );
}

interface A03ShareDataProps {
    initialCount0?: number;
    initialCount1?: number;
}

function A03ShareData({initialCount0, initialCount1}: A03ShareDataProps) {
    initialCount0 = initialCount0 || 0;
    initialCount1 = initialCount1 || 0;
    const [totalCount, setTotalCount] = useState(initialCount0 + initialCount1);

    function addTotalCount(count: number) {
        setTotalCount(totalCount + count);
    }

    return (
        <div>
            <p>Total count: {totalCount}</p>
            <SubButton addTotalCount={addTotalCount} initialCount={initialCount0} />
            <SubButton addTotalCount={addTotalCount} initialCount={initialCount1} />
        </div>
    );
}

export default A03ShareData;