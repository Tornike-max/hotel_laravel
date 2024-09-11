import axios from "axios";
import { CareerFormInputs } from "../types/types";

export const getCareers = async ({
    searchVal,
    selectVal,
    filterVal,
    filterByLocation,
    filterByEmpType,
    salaryRange,
    page,
}: {
    searchVal: string;
    selectVal: string;
    filterVal: string;
    filterByLocation: string;
    filterByEmpType: string;
    salaryRange: string[] | string;
    page: string;
}) => {
    try {
        const token = localStorage.getItem("access_token") || "";
        const data = await axios.get(
            `http://127.0.0.1:8000/api/careers${
                page !== null ? `?page=${page}` : ""
            }`,
            {
                params: {
                    searchVal,
                    selectVal,
                    filterVal,
                    filterByLocation,
                    filterByEmpType,
                    salaryRange,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const result = data.data.data ?? [];
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Can't get data");
    }
};

export const getCareer = async (careerId: string) => {
    try {
        const res = await fetch(
            `http://127.0.0.1:8000/api/careers/${careerId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!res.ok) {
            throw new Error("Error while getting careers data");
        }

        const data = await res.json();

        const result = data.data;

        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Can't get data");
    }
};

export const storeCareer = async (careerData: CareerFormInputs) => {
    try {
        const token = localStorage.getItem("access_token");

        if (!token) {
            throw new Error("Access token is missing");
        }

        const response = await axios.post(
            `http://127.0.0.1:8000/api/careers`,
            careerData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.data) {
            throw new Error("Error while storing new career");
        }

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error Response:", error.response.data);
            } else if (error.request) {
                console.error("No Response:", error.request);
            } else {
                console.error("Axios Error:", error.message);
            }
        } else {
            console.error("Unexpected Error:", error);
        }
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const data = await axios.get("http://127.0.0.1:8000/api/categories");
        if (!data.data) return;

        const result = data.data.data;

        return result;
    } catch (error) {
        console.error(error);
        throw new Error("error while getting data");
    }
};

export const getCompanyIds = async () => {
    const token = localStorage.getItem("access_token");
    try {
        const data = await axios.get(
            `http://127.0.0.1:8000/api/companies/get-ids`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!data.data) {
            throw new Error("No Data");
        }

        const result = data.data.data;
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Error while getting ids");
    }
};

export const getCompany = async (companyId: string) => {
    const token = localStorage.getItem("access_token");
    try {
        const data = await axios.get(
            `http://127.0.0.1:8000/api/companies/${companyId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!data.data) {
            throw new Error("No Data");
        }

        const result = data.data.data;
        return result;
    } catch (error) {
        console.error(error);
        throw new Error(
            "Error while getting company with this id=>" + companyId
        );
    }
};

//locations
export const getLocations = async () => {
    const token = localStorage.getItem("access_token");
    try {
        const data = await axios.get("http://127.0.0.1:8000/api/locations", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (!data.data) {
            throw new Error("Error while getting locations");
        }

        const result = data.data.data;
        return result;
    } catch (error) {
        console.error(error);
        throw Error("Something went wrong");
    }
};

//auth

export const registerUser = async (registerData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}) => {
    try {
        const data = await axios.post(
            "http://127.0.0.1:8000/api/user/register",
            registerData
        );

        if (!data.data) {
            throw new Error("Can't register");
        }

        const result = data.data;
        return result;
    } catch (error) {
        console.error(error);
        throw Error("Something went wrong");
    }
};

export const loginUser = async (loginData: {
    email: string;
    password: string;
}) => {
    try {
        const data = await axios.post(
            "http://127.0.0.1:8000/api/session/login",
            loginData
        );

        if (!data.data) {
            throw new Error("Can't login");
        }

        const result = data.data;
        return result;
    } catch (error) {
        console.error(error);
        throw Error("Something went wrong");
    }
};

export const logOutUser = async () => {
    const token = localStorage.getItem("access_token");
    try {
        const data = await axios.post(
            `http://127.0.0.1:8000/api/session/logout`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!data.data) {
            throw new Error("Can't logout");
        }

        const result = data.data;
        return result;
    } catch (error) {
        console.error(error);
        throw Error("Something went wrong");
    }
};

export const getUser = async () => {
    const token = localStorage.getItem("access_token");
    const user = await axios.get(
        `http://127.0.0.1:8000/api/session/user/${localStorage.getItem(
            "userId"
        )}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    if (!user.data) {
        window.location.href = "/login";
    }

    const result = user.data;
    return result;
};
