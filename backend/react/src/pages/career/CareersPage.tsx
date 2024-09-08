import { useSearchParams } from "react-router-dom";
import { useGetCareers } from "../../hooks/useGetCareers";
import { CareerType } from "../../types/types";
import CareerTable from "../../ui/CareerTable";
import Pagination from "../../ui/Pagination";
import SearchInput from "../../ui/SearchInput";
import SelectCategory from "../../ui/SelectCategory";
import FilterByExperience from "../../ui/FilterByExperience";
import FilterByLocation from "../../ui/FilterByLocation";
import FilterByEmpType from "../../ui/FilterByEmpType";
import SalaryRange from "../../ui/SalaryRange";

const CareersPage = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || "";
    const { data, isPending } = useGetCareers(page);

    if (isPending) return <p>Loading...</p>;

    return (
        <div className="w-full flex justify-center items-center flex-col gap-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                <SearchInput />
                <SelectCategory />
                <FilterByExperience />
                <FilterByLocation />
            </div>
            <div className="w-full flex justify-center items-center gap-2 flex-col">
                <FilterByEmpType />
                <SalaryRange />
            </div>

            <div className="w-full">
                {data?.data?.length >= 1 ? (
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
                ) : (
                    <div className="w-full flex justify-center items-center">
                        <p>No Data Founded</p>
                    </div>
                )}

                {data?.data?.length > 10 && <Pagination data={data} />}
            </div>
        </div>
    );
};

export default CareersPage;
