import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../api/api";

export const useGetLocations = () => {
    const { data: locations, isPending: isLocationsPending } = useQuery({
        queryKey: ["locations"],
        queryFn: () => getLocations(),
    });

    return { locations, isLocationsPending };
};
