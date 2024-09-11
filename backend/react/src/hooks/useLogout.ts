import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutUser } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: logOut, isPending } = useMutation({
        mutationFn: () => logOutUser(),
        onSuccess: () => {
            toast.success("User log out successfully");
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            localStorage.removeItem("userId");
            localStorage.removeItem("access_token");
            navigate("/login");
        },
        onError: () => {
            toast.error("Error while logout user");
        },
    });

    return { logOut, isPending };
};

export default useLogout;
