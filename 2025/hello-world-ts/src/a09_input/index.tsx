import React from 'react';

export default function A09Input() {
    const [submitName, setSubmitName] = React.useState("");
    const [inputName, setInputName] = React.useState("");
    function doInputName(e: React.ChangeEvent<HTMLInputElement>) {
        setInputName(e.target.value);
    }
    function doInputKeyEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            doSubmitName();
        }
    }
    function doSubmitName() {
        setSubmitName(inputName);
    }
    return <div>
        <label>Name: </label>
        <input id="name-input" type="text" placeholder="Your name" onChange={doInputName} onKeyDown={doInputKeyEnter}/>
        <button onClick={doSubmitName}>Submit</button>
        <p>Enter: {inputName}</p>
        <p>Submit: {submitName}</p>
    </div>
}
