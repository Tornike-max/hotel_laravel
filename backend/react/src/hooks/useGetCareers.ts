import { useQuery } from "@tanstack/react-query";
import { getCareers } from "../api/api";
import { useSearchParams } from "react-router-dom";

export const useGetCareers = () => {
    const [searchParams] = useSearchParams();
    const searchVal = searchParams.get("searchVal") || "";
    const selectVal = searchParams.get("selectVal") || "";

    const { data, isPending } = useQuery({
        queryKey: [
            "careers",
            `searchVal=${searchVal}`,
            `selectVal=${selectVal}`,
        ],
        queryFn: () => getCareers({ searchVal, selectVal }),
    });

    return { data, isPending };
};
