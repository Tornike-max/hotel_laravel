import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser as loginUserApi } from "../api/api";
import toast from "react-hot-toast";

const useLogin = () => {
    const queryClient = useQueryClient();
    const { mutate: loginUser, isPending } = useMutation({
        mutationFn: (loginData: { email: string; password: string }) =>
            loginUserApi(loginData),
        onSuccess: (data) => {
            toast.success("User sign in successfully");
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            localStorage.setItem("userId", data.data.user.id);
            localStorage.setItem("access_token", data.data.access_token);
        },
        onError: () => {
            toast.error("error while login user");
        },
    });

    return { loginUser, isPending };
};

export default useLogin;
