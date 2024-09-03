import { useEffect, useState } from "react";

export const useDebounce = (search: string, time: number) => {
    const [debounce, setDebounce] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(search);
        }, time);

        return () => {
            clearTimeout(timeout);
        };
    }, [time, search]);

    return debounce;
};
