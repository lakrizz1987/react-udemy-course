import { useCallback, useEffect, useState } from "react";

const useHttp = (handler) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTasks = useCallback( async (methods) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                'https://speedy-lattice-91920-default-rtdb.firebaseio.com/tasks.json',
                 methods ? methods : {}
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            if(handler){
                handler(data)
            }
            

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    },[handler]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return { isLoading, error, fetchTasks }
};

export default useHttp;