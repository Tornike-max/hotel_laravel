import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/api";

export const useGetCategories = () => {
    const { data, isPending } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return { data, isPending };
};
