import axios from "axios";

export const getCareers = async ({
    searchVal,
    selectVal,
    page,
}: {
    searchVal: string;
    selectVal: string;
    page: string;
}) => {
    try {
        const data = await axios.get(
            `http://127.0.0.1:8000/api/careers${
                page !== null ? `?page=${page}` : ""
            } `,
            {
                params: { searchVal, selectVal },
            }
        );

        const result = data.data ?? [];
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
