import React from "react";

export default function A10Effect() {
    console.log("call A10Effect");
    const [inputContent, setInputContent] = React.useState("");
    const [inputLength, setInputLength] = React.useState(0);
    React.useEffect(() => {
        setInputLength(inputContent.length);
    }, [inputContent]);
    return <div>
        <input type="text" onChange={e => setInputContent(e.target.value)} />
        <label>Length: {inputLength}</label>
    </div>
}
