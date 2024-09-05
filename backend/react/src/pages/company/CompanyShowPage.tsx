import { useGetCompany } from "../../hooks/useGetCompny";
import { CareerType } from "../../types/types";
import CompanyTable from "../../ui/CompanyTable";
import NavLink from "../../ui/NavLink";

const CompanyShowPage = () => {
    const { company, isPending } = useGetCompany();

    if (isPending) return <p>Loading...</p>;

    console.log(company);
    return (
        <div className="w-full flex justify-center items-center flex-col gap-4">
            <div className="w-full flex justify-start items-center gap-2">
                <NavLink path={"/"} label={"ყველა ვაკანსია"} />
            </div>

            <h1 className="w-full text-start text-2xl font-semibold">
                {company.name}
            </h1>

            <div className="w-full">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                დასახელება
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                მომწოდებელი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ლოკაცია
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                გამოქვეყნდა
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {company?.careers.map((career: CareerType) => (
                            <CompanyTable
                                key={career.id}
                                career={career}
                                logo={company.logo}
                                companyName={company.name}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompanyShowPage;
