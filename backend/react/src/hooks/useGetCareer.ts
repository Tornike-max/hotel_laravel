import { useQuery } from "@tanstack/react-query";
import { getCareer } from "../api/api";
import { useParams } from "react-router-dom";

export const useGetCareer = () => {
    const { careerId } = useParams();

    const { data, isPending } = useQuery({
        queryKey: ["careers", `id=${careerId}`],
        queryFn: () => getCareer(careerId || ""),
    });

    return { data, isPending };
};
