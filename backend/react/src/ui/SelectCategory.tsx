import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SelectCategory = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState(
        searchParams.get("selectVal") || ""
    );

    const handleSearchParams = (value: string) => {
        setCategory(value);
        searchParams.set("selectVal", value);
        setSearchParams(searchParams);
    };

    return (
        <div className="mt-2 rounded-md shadow-sm w-full">
            <select
                id="select"
                value={category}
                onChange={(e) => handleSearchParams(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value={""}>აირჩიე კატეგორია</option>
                <option value={"It"}>IT, აიტი</option>
                <option value={"finances"}>ფინანსები</option>
            </select>
        </div>
    );
};

export default SelectCategory;
