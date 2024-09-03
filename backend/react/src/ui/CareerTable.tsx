import { useNavigate } from "react-router-dom";
import { CareerType } from "../types/types";

const CareerTable = ({ career }: { career: CareerType }) => {
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
                        src={career.company.logo}
                        alt={career.company.name}
                        loading="lazy"
                    />
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {career.company.name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {career.title}
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
