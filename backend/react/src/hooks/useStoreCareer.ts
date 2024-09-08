import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeCareer } from "../api/api";
import { CareerFormInputs } from "../types/types";
import toast from "react-hot-toast";

export const useStoreCareer = () => {
    const queryClient = useQueryClient();
    const { mutate: createCareer, isPending: isCreating } = useMutation({
        mutationFn: (careerData: CareerFormInputs) => storeCareer(careerData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["careers"] });
            toast.success("New job created successfully");
        },
        onError: () => {
            toast.error("Error while creating job");
        },
    });

    return { createCareer, isCreating };
};
