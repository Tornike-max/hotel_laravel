import { PhotoIcon } from "@heroicons/react/24/outline";
import { SubmitHandler, useForm } from "react-hook-form";
import { CareerFormInputs } from "../../types/types";
import { Link } from "react-router-dom";
import { useStoreCareer } from "../../hooks/useStoreCareer";

const CareerCreatePage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CareerFormInputs>();
    const { createCareer, isCreating } = useStoreCareer();

    const onSubmit: SubmitHandler<CareerFormInputs> = (data) => {
        console.log(data);
        if (!data) return;
        createCareer(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        განათავსე შენი განცხადება
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        ეს ინფორმაცია ხელმისაწვდომი იქნება ყველა
                        მომხმარებლისთვის, ასე რომ ფრთხილად იყავით სანამ
                        განათავსებთ.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                სათაური
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="ფრონტენდ დეველოპერი"
                                        autoComplete="title"
                                        {...register("title", {
                                            required:
                                                "სათაურის მითითება აუცილებელია.",
                                        })}
                                        className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {errors?.title?.message && (
                                    <span className="text-red-500 text-xs sm:text-sm">
                                        {errors?.title?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="about"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                სამუშაოს აღწერა
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    rows={3}
                                    {...register("description", {
                                        required:
                                            "სამუშაოს აღწერილობის მითითება აუცილებელია",
                                    })}
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                />
                            </div>

                            {errors?.description?.message ? (
                                <span className="text-red-500 text-xs sm:text-sm">
                                    {errors?.description?.message}
                                </span>
                            ) : (
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    მიუთითე სამუშაოს აღწერილობა.
                                </p>
                            )}
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                თქვენი ლოგო
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto h-12 w-12 text-gray-300"
                                    />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                {...register("logo")}
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        ხელფასი
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        ხელფასის მითითება არასავალდებულოა, მაგრამ ჩვენ
                        გირჩევთ,რომ მიუთითოთ თქვენი სამუშაოს ხილვადობის
                        გასაზრდელად.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                ხელფასი
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sakary"
                                    type="number"
                                    {...register("salary")}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label
                                htmlFor="street-address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                ქალაქი
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    type="text"
                                    {...register("location", {
                                        required:
                                            "ლოკაციის მითითება აუცილებელია",
                                    })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors?.location?.message && (
                                <span className="text-red-500 text-xs sm:text-sm">
                                    {errors?.location?.message}
                                </span>
                            )}
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="region"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                დასაქმების ტიპი
                            </label>
                            <div className="mt-2">
                                <input
                                    id="emp_type"
                                    type="text"
                                    {...register("employment_type", {
                                        required:
                                            "დასაქმების ტიპის მითითება აუცილებელია",
                                    })}
                                    autoComplete="employment_type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            {errors?.employment_type?.message && (
                                <span className="text-red-500 text-xs sm:text-sm">
                                    {errors?.employment_type?.message}
                                </span>
                            )}
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="postal-code"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                გამოცდილების დონე
                            </label>
                            <div className="mt-2">
                                <input
                                    id="experience"
                                    type="text"
                                    {...register("experience_level", {
                                        required:
                                            "გამოცდილების დონის მითითება აუცილებელია",
                                    })}
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            {errors?.experience_level?.message && (
                                <span className="text-red-500 text-xs sm:text-sm">
                                    {errors?.experience_level?.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link
                    to={"/careers/show"}
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isCreating ? "Loading..." : "Save"}
                </button>
            </div>
        </form>
    );
};

export default CareerCreatePage;
