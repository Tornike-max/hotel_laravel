import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../api/api";
import toast from "react-hot-toast";

export const useRegisterUser = () => {
    const queryClient = useQueryClient();
    const { mutate: register, isPending: isRegistering } = useMutation({
        mutationFn: (registerData: {
            name: string;
            email: string;
            password: string;
            password_confirmation: string;
        }) => registerUser(registerData),
        onSuccess: () => {
            toast.success("User registered successfully");
            queryClient.invalidateQueries({ queryKey: ["auth"] });
        },
        onError: () => {
            toast.error("Error while register user");
        },
    });

    return { register, isRegistering };
};
