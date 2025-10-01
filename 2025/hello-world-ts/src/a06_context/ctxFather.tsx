import React, { useState } from 'react';
import {ValContext, ValCtxType} from './valContext';

import ValLabel  from './valLabel';
import ValSwitchButton from './valSwitchButton';

function A06CtxFather() {

    // val 只有首次渲染时为 0，之后值由 setVal() 改变
    const [val, setVal] = useState<number>(()=>0);
    
    const ValContextValue: ValCtxType = {
        val: val,
        // setVal 可以传入固定值，也可以是 (prev)=>new 函数
        switchVal: () => setVal((prev) => 1 - prev),
    };

    console.log("call A06CtxFather", "val:", val)

    return (
        // 通过 ValContext.Provider 广播 ValContextValue 给所有子组件
        <ValContext.Provider value={ValContextValue}>
            <ValLabel />
            <ValSwitchButton />
        </ValContext.Provider>
    );
}

export default A06CtxFather;