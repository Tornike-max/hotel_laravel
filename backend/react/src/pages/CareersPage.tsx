import { useSearchParams } from "react-router-dom";
import { useGetCareers } from "../hooks/useGetCareers";
import { CareerType } from "../types/types";
import CareerTable from "../ui/CareerTable";
import Pagination from "../ui/Pagination";
import SearchInput from "../ui/SearchInput";
import SelectCategory from "../ui/SelectCategory";

const CareersPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || "";
    const { data, isPending } = useGetCareers(page);

    if (isPending) return <p>Loading...</p>;

    return (
        <div className="w-full flex justify-center items-center flex-col gap-4">
            <div className="w-full flex justify-end items-center gap-2">
                <SearchInput />
                <SelectCategory />
            </div>

            <div className="w-full">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Location
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Experience Level
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data?.data.map((career: CareerType) => (
                            <CareerTable key={career.id} career={career} />
                        ))}
                    </tbody>
                </table>

                <Pagination data={data} />
            </div>
        </div>
    );
};

export default CareersPage;
