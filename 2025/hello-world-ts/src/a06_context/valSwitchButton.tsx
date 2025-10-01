import { useValContext } from './valContext';

function ValSwitchButton() {
    const valCtxValue = useValContext();

    return (
        <button onClick={valCtxValue.switchVal}>
            switch
        </button>
    );
}

export default ValSwitchButton;
