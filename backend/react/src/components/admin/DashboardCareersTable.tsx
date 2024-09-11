import { Link, useSearchParams } from "react-router-dom";
import { useGetAdminCareers } from "../../hooks/useGetAdminCareers";
import { Spinner } from "@nextui-org/react";
import Pagination from "../../ui/Pagination";

const DashboardCareersTable = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || "";
    const { data, isPending } = useGetAdminCareers(page);

    if (isPending)
        return (
            <div className="w-full flex justify-center items-center my-36">
                <Spinner size="lg" color="primary" />
            </div>
        );
    return (
        <div className="relative overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-100 text-gray-600">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <label className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            მომწოდებელი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            დასახელება
                        </th>
                        <th scope="col" className="px-6 py-3">
                            დასაქმების ტიპი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ხელფასი
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ლოკაცია
                        </th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((career) => (
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-table-search-1"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                {career?.company.name}
                            </th>
                            <td className="px-6 py-4">{career?.title}</td>
                            <td className="px-6 py-4">
                                {career.employment_type}
                            </td>
                            <td className="px-6 py-4">${career.salary}</td>
                            <td className="px-6 py-4">{career.location}</td>

                            <td className="px-6 py-4 space-x-2 text-nowrap">
                                <Link
                                    to="#"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </Link>
                                <button className="font-medium text-blue-600 hover:underline">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination data={data} />
        </div>
    );
};

export default DashboardCareersTable;
