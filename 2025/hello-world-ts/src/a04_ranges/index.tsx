import React, { useState } from 'react';

interface RangesProps { 
    start: number;
    end: number;
    step: number;
}

interface RangeFiltersProps extends RangesProps { 
    setStart: (start: number) => void;
    setEnd: (end: number) => void;
    setStep: (step: number) => void;
}

function RangeFilters({start, end, step, setStart, setEnd, setStep}: RangeFiltersProps) {

    return (
        <div>
            <label>start: {start}</label>
            <input type="range" min={0} max={100} value={start} onChange={(e) => setStart(parseInt(e.target.value))} />
            <label>end: {end}</label>
            <input type="range" min={0} max={100} value={end} onChange={(e) => setEnd(parseInt(e.target.value))} />
            <label>step: {step}</label>
            <input type="range" min={-10} max={10} value={step} onChange={(e) => setStep(parseInt(e.target.value))}/>
        </div>
    )
}

function Ranges({start, end, step}: RangesProps) {
    if (step === 0) { 
        step = 1
    }
    step = end >= start? Math.abs(step) : -Math.abs(step);

    const numbers = [];
    let max = 10;
    for (let i = start; (start <= end) === (i <= end); i += step) { 
        numbers.push(<li key={i}>{i}</li>);
        max -= 1;
        if (max <= 0) { 
            break;
        }
    }

    return (
        <div>
            <ul>
                {numbers}
            </ul>
        </div>
    );
}



export default function A04Ranges() {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const [step, setStep] = useState(1);

    return (
        <div>
            <RangeFilters start={start} end={end} step={step} setStart={setStart} setEnd={setEnd} setStep={setStep} />
            <Ranges start={start} end={end} step={step} />
        </div>
    )
}