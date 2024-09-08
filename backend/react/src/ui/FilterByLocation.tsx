import { Key, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetLocations } from "../hooks/useGetLocations";

const FilterByLocation = () => {
    const [location, setLocation] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const filterVal = searchParams.get("filterByLocation") || "";
    const { locations, isLocationsPending } = useGetLocations();

    useEffect(() => {
        if (!filterVal) {
            searchParams.delete("filterByLocation");
            setSearchParams(searchParams);
        }
    }, [filterVal]);

    const handleFilterByLocation = (value: string) => {
        setLocation(value);
        searchParams.set("filterByLocation", value);
        setSearchParams(searchParams);
    };

    if (isLocationsPending) return <p>Loading...</p>;

    return (
        <div className="mt-2 rounded-md shadow-sm w-full">
            <select
                id="filter"
                value={location || filterVal}
                onChange={(e) => handleFilterByLocation(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="">None</option>
                {locations.map((location: { id: Key; city: string }) => (
                    <option key={location.id} value={location.city}>
                        {location.city.slice(0, 1).toUpperCase() +
                            location.city.slice(1).toLowerCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterByLocation;
