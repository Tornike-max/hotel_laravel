import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useGetUser = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useGetUser must be used within an AuthProvider");
    }

    return context;
};
