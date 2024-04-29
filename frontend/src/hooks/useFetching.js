import {useState} from "react";

export const useFetching = (callback) => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error]
}
