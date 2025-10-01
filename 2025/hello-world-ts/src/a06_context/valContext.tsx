import { createContext, useContext } from "react";

interface ValCtxType {
    val: number;
    switchVal: () => void;
}

const ValContext = createContext<ValCtxType|null>(null);

function useValContext() : ValCtxType {
    const valCtxType: ValCtxType | null = useContext(ValContext);
    if (valCtxType === null) {
        throw new Error("useValContext must be used within a ValContext.Provider");
    }
    return valCtxType;
}

export {ValContext, useValContext};

export type {ValCtxType};
