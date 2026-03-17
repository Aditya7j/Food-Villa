import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getData = async function () {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            }
            catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        getData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;