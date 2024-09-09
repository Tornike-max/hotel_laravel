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
        console.log(salaryRange);
        const data = await axios.get(
            `http://127.0.0.1:8000/api/careers${
                page !== null ? `?page=${page}` : ""
            } `,
            {
                params: {
                    searchVal,
                    selectVal,
                    filterVal,
                    filterByLocation,
                    filterByEmpType,
                    salaryRange,
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
            `http://127.0.0.1:8000/api/careers/${careerId}`
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
        const data = await axios.post(
            `http://127.0.0.1:8000/api/careers`,
            careerData
        );

        if (!data.data) {
            throw new Error("Error while storing new carrer");
        }

        return data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error Response:", error.response.data);
            } else if (error.request) {
                console.error("No Response:", error.request);
            } else {
                console.error("Error:", error.message);
            }
        } else {
            console.error("Unexpected Error:", error);
        }
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

export const getCompanies = async () => {};

export const getCompany = async (companyId: string) => {
    try {
        const data = await axios.get(
            `http://127.0.0.1:8000/api/companies/${companyId}`
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
    try {
        const data = await axios.get("http://127.0.0.1:8000/api/locations");
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
    try {
        const data = await axios.post(
            `http://127.0.0.1:8000/api/session/logout`
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
    const user = await axios.get(
        `http://127.0.0.1:8000/api/session/user/${localStorage.getItem(
            "userId"
        )}`
    );

    if (!user.data) {
        window.location.href = "/login";
    }

    const result = user.data;
    return result;
};
