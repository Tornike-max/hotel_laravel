import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCompany } from "../api/api";

export const useGetCompany = () => {
    const { companyId } = useParams();

    const {
        data: company,
        isPending,
        error,
    } = useQuery({
        queryKey: [`company=${companyId}`],
        queryFn: () => getCompany(companyId || ""),
    });

    return { company, isPending, error };
};
