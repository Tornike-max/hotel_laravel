import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterByEmpType = () => {
    const [filterByEmpType, setFilterByEmpType] = useState("");
    const [searchParams, setSearchParams] = useSearchParams("");
    const filterVal = searchParams.get("filterByEmpType") || "";

    useEffect(() => {
        if (!filterVal) {
            searchParams.delete("filterByEmpType");
            setSearchParams(searchParams);
        }
    }, [filterVal]);

    const handleFilterByEmpType = (value: string) => {
        setFilterByEmpType(value);
        searchParams.set("filterByEmpType", value);
        setSearchParams(searchParams);
    };
    return (
        <div className="mt-2 rounded-md shadow-sm w-full">
            <select
                id="filter"
                value={filterByEmpType || filterVal}
                onChange={(e) => handleFilterByEmpType(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="">None</option>
                <option value="Contract">Contract</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Hybrid">Hybrid</option>
            </select>
        </div>
    );
};

export default FilterByEmpType;
