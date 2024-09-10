import { useQuery } from "@tanstack/react-query";
import { getCompanyIds } from "../api/api";

export const useGetCompanyIds = () => {
    const { data, isPending } = useQuery({
        queryKey: ["companies", `companyIds`],
        queryFn: () => getCompanyIds(),
    });

    return { data, isPending };
};
