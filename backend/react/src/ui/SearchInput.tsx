import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";

const SearchInput = () => {
    const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const getVal = searchParams.get("searchVal") || "";
    const debounce = useDebounce(query, 700);

    useEffect(() => {
        if (debounce === "") return;
        searchParams.set("searchVal", debounce);
        setSearchParams(searchParams);
    }, [debounce]);

    const handleSearch = (value: string) => {
        setQuery(value);
        if (value.trim() === "") {
            searchParams.delete("searchVal");
            setSearchParams(searchParams);
        }
    };

    return (
        <div className="relative mt-2 rounded-md shadow-sm w-full">
            <input
                type="text"
                id="search"
                value={query || getVal}
                onChange={(e) => handleSearch(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm">
                    <HiMiniMagnifyingGlass />
                </span>
            </div>
        </div>
    );
};

export default SearchInput;
