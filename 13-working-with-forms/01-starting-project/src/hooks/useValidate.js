import { useState } from "react";

const useValidate = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isToched, setIsToched] = useState(false);

    const valueIsValid = validateFunction(enteredValue);
    const hasError = isToched && !valueIsValid;

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const valueInputBlurHandler = (event) => {
        setIsToched(true);
    };

    const reset = () => {
        setEnteredValue('')
        setIsToched(false);
    }

    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        valueInputChangeHandler,
        valueInputBlurHandler,
        reset
    }
};

export default useValidate;