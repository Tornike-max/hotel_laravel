import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
interface RangeInterface {
    from: string;
    to: string;
}
const SalaryRange = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RangeInterface>();
    const [searchParams, setSearchParams] = useSearchParams();
    const salaryData = searchParams.get("salaryRange")?.split(",") || "";

    const onSubmit: SubmitHandler<RangeInterface> = (data) => {
        if (!data.from || !data.to) {
            searchParams.delete("salaryRange");
            setSearchParams(searchParams);
        }
        searchParams.set("salaryRange", String([data.from, data.to]));
        setSearchParams(searchParams);
    };

    const handleClear = () => {
        if (salaryData.length !== 0) {
            searchParams.delete("salaryRange");
            setSearchParams(searchParams);
            reset();
        } else {
            return;
        }
    };

    return (
        <div className="flex flex-col gap-2 h-full w-full items-start justify-center">
            <form
                className="w-full flex justify-center items-center flex-col gap-3"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full flex justify-center items-center gap-3">
                    <div className="mt-2 rounded-md shadow-sm w-full">
                        <input
                            type="text"
                            id="search"
                            {...register("from", {
                                required: "This field is required",
                            })}
                            defaultValue={salaryData[0] || ""}
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Salary from where"
                        />
                        {errors.from?.message && (
                            <span className="text-red-500 text-xs sm:text-sm">
                                {errors.from.message}
                            </span>
                        )}
                    </div>
                    <span className="text-lg font-semibold mt-2">
                        <HiOutlineArrowRight />
                    </span>
                    <div className="mt-2 rounded-md shadow-sm w-full">
                        <input
                            type="text"
                            id="search"
                            {...register("to", {
                                required: "This field is required",
                            })}
                            defaultValue={salaryData[1] || ""}
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="To where"
                        />
                        {errors.to?.message && (
                            <span className="text-red-500 text-xs sm:text-sm">
                                {errors.to.message}
                            </span>
                        )}
                    </div>
                </div>
                <button
                    className={`${
                        salaryData.length === 0 ? "flex" : "hidden"
                    } w-full  justify-center items-center py-2 px-3 bg-blue-500 hover:bg-blue-600 duration-150 transition-all rounded-lg text-white`}
                    type="submit"
                >
                    Search by salary
                </button>
            </form>
            {salaryData !== "" && (
                <button
                    onClick={handleClear}
                    className="w-full flex justify-center items-center py-2 px-3 bg-blue-500 hover:bg-blue-600 duration-150 transition-all rounded-lg text-white"
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default SalaryRange;
