import { useQuery } from "@tanstack/react-query";
import { getAdminCareers } from "../api/api";

export const useGetAdminCareers = (page: string) => {
    const { data, isPending } = useQuery({
        queryKey: ["admin", "careers", `page=${page}`],
        queryFn: () => getAdminCareers(page),
    });
    return { data, isPending };
};
