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

    return {
        value: enteredValue,
        hasError,
        valueInputChangeHandler,
        valueInputBlurHandler
    }
};

export default useValidate;