import { useDebugValue, useEffect, useState } from "react"

const useFetchAPI = (url = '', options = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setError(null);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setLoading(false));
    }, [url, options]);

    useDebugValue('API Fetcher');

    return { data, error, loading };
}

export default useFetchAPI;