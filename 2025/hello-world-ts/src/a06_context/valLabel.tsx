import { useValContext } from "./valContext";

function ValLabel() {
    const valCtxValue = useValContext();

    return (
        <label>{valCtxValue.val}</label>
    );
}

export default ValLabel;