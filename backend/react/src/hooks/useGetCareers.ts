import { useQuery } from "@tanstack/react-query";
import { getCareers } from "../api/api";
import { useSearchParams } from "react-router-dom";

export const useGetCareers = (page: string) => {
    const [searchParams] = useSearchParams();
    const searchVal = searchParams.get("searchVal") || "";
    const selectVal = searchParams.get("selectVal") || "";
    const filterVal = searchParams.get("filterBy") || "";
    const filterByLocation = searchParams.get("filterByLocation") || "";
    const filterByEmpType = searchParams.get("filterByEmpType") || "";
    const salaryRange = searchParams.get("salaryRange")?.split(",") || "";

    const { data, isPending } = useQuery({
        queryKey: [
            "careers",
            `page=${page}`,
            `searchVal=${searchVal}`,
            `selectVal=${selectVal}`,
            `filterVal=${filterVal}`,
            `filterByLocation=${filterByLocation}`,
            `filterByEmpType=${filterByEmpType}`,
            `salaryRange=${salaryRange}`,
        ],
        queryFn: () =>
            getCareers({
                searchVal,
                selectVal,
                filterVal,
                filterByLocation,
                filterByEmpType,
                salaryRange,
                page,
            }),
    });

    return { data, isPending };
};
