import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterByExperience() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterVal = searchParams.get("filterBy") || "";
    const [filterBy, setFilterBy] = useState("");

    useEffect(() => {
        if (filterBy === "") return;
        searchParams.set("filterBy", filterBy);
        setSearchParams(searchParams);
    }, [filterBy]);

    const handleFilterByExp = (value: string) => {
        setFilterBy(value);
        if (filterBy === "") {
            searchParams.delete("filterBy");
            setSearchParams(searchParams);
        }
    };

    return (
        <div className="mt-2 rounded-md shadow-sm w-full">
            <select
                id="filter"
                value={filterBy || filterVal}
                onChange={(e) => handleFilterByExp(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="">Filter by experience</option>
                <option value="Entry-level">Entry level</option>
                <option value="Junior-level">Junior level</option>
                <option value="Middle-level">Middle level</option>
                <option value="Senior-level">Senior level</option>
            </select>
        </div>
    );
}
