import axios from "axios";

export const getCareers = async ({
    searchVal,
    selectVal,
}: {
    searchVal: string;
    selectVal: string;
}) => {
    console.log(searchVal, selectVal);
    try {
        if (!searchVal || !selectVal) {
            const data = await axios.get(`http://127.0.0.1:8000/api/careers`, {
                params: { searchVal, selectVal },
            });

            const result = data.data.data ?? [];
            return result;
        }
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
