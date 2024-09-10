import { createContext, useEffect, useState } from "react";
import { AuthContextType, AuthResponse } from "../types/types";
import axios from "axios";
import { Navigate, redirect } from "react-router-dom";

const initialData: AuthResponse = {
    access_token: "",
    user: {
        name: "",
        email: "",
        profile_picture: "",
        role: "",
        id: null,
    },
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(initialData.user);
    const [accessToken, setAccessToken] = useState(initialData.access_token);
    const [isLoading, setIsLoading] = useState(true);

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (
            localStorage.getItem("userId") !== "" &&
            localStorage.getItem("access_token") !== ""
        ) {
            setIsLoading(true);

            const userId = localStorage.getItem("userId");
            const storedToken = localStorage.getItem("access_token") || "";

            const getUser = async () => {
                try {
                    const response = await axios.get(
                        `http://127.0.0.1:8000/api/session/user/${userId}`,
                        {
                            headers: {
                                Authorization: `Bearer ${storedToken}`,
                            },
                        }
                    );

                    const result = response.data.data;

                    if (!result) {
                        throw new Error("User not found");
                    }

                    setUser(result);
                    setAccessToken(storedToken);
                    setIsAuth(true);
                    setIsLoading(false);
                } catch (error) {
                    console.error(error);
                    setIsAuth(false);
                    redirect("/login");
                } finally {
                    setIsLoading(false);
                }
            };
            getUser();
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                access_token: accessToken,
                setUser,
                setAccessToken,
                isAuth,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
