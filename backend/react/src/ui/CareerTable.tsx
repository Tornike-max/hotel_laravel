import { useNavigate } from "react-router-dom";
import { CareerType } from "../types/types";
import { Tooltip } from "@nextui-org/react";

const CareerTable = ({
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
            key={career.id}
            className="hover:bg-gray-100 duration-150 transition-all cursor-pointer"
        >
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={logo || career.company.logo}
                        alt={companyName || career.company.name}
                        loading="lazy"
                    />
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {companyName || career.company.name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {career.title}{" "}
                <Tooltip
                    content="Has salary"
                    delay={1000}
                    className="text-blue-500"
                >
                    <span className="text-blue-500">
                        {career.salary ? "$" : ""}
                    </span>
                </Tooltip>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {career.location}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {career.experience_level}
            </td>
        </tr>
    );
};

export default CareerTable;
