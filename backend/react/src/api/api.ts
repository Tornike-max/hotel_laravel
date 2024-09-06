import axios from "axios";

export const getCareers = async ({
    searchVal,
    selectVal,
    filterVal,
    page,
}: {
    searchVal: string;
    selectVal: string;
    filterVal: string;
    page: string;
}) => {
    console.log(filterVal);
    try {
        const data = await axios.get(
            `http://127.0.0.1:8000/api/careers${
                page !== null ? `?page=${page}` : ""
            } `,
            {
                params: { searchVal, selectVal, filterVal },
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
