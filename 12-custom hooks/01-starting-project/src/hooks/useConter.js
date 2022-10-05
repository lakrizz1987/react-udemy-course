import { useEffect, useState } from "react";


const useCounter = (param) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            if (param) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [param]);

    return counter
};

export default useCounter;

