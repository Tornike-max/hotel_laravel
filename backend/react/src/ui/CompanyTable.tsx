import { useNavigate } from "react-router-dom";
import { CareerType } from "../types/types";
import { formatDate } from "./formatDate";

const CompanyTable = ({
    career,
    logo,
    companyName,
}: {
    career: CareerType;
    logo?: string;
    companyName?: string;
}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (!career.id) return;
        return navigate(`careers/${career.id}`);
    };

    return (
        <tr
            onClick={() => handleNavigate()}
            className="hover:bg-gray-100 duration-150 transition-all cursor-pointer"
        >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {career.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center gap-1">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={logo}
                        alt={""}
                        loading="lazy"
                    />
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {companyName}
                        </div>
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {career.location}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(career.created_at)}
            </td>
        </tr>
    );
};

export default CompanyTable;
