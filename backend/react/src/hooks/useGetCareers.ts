import { useQuery } from "@tanstack/react-query";
import { getCareers } from "../api/api";
import { useSearchParams } from "react-router-dom";

export const useGetCareers = (page: string) => {
    const [searchParams] = useSearchParams();
    const searchVal = searchParams.get("searchVal") || "";
    const selectVal = searchParams.get("selectVal") || "";
    const filterVal = searchParams.get("filterBy") || "";

    const { data, isPending } = useQuery({
        queryKey: [
            "careers",
            `page=${page}`,
            `searchVal=${searchVal}`,
            `selectVal=${selectVal}`,
            `filterVal=${filterVal}`,
        ],
        queryFn: () => getCareers({ searchVal, selectVal, filterVal, page }),
    });

    return { data, isPending };
};
