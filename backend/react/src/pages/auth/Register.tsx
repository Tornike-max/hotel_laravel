import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../hooks/useRegisterUser";

interface RegisterInterface {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<RegisterInterface>();
    const { register: registerUser, isRegistering } = useRegisterUser();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<RegisterInterface> = (data) => {
        if (!data) return;
        registerUser(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Register User
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <label
                                htmlFor="full-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Full name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", {
                                        required: "name is required",
                                    })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.name?.message && (
                                <span className="text-red-500 text-sm">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.email?.message && (
                                <span className="text-red-500 text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.password?.message && (
                                <span className="text-red-500 text-sm">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password_confirmation"
                                    {...register("password_confirmation", {
                                        required: "This field is required",
                                        validate: (val) =>
                                            val === getValues("password") ||
                                            "Passwords should match",
                                    })}
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.password_confirmation?.message && (
                                <span className="text-red-500 text-sm">
                                    {errors.password_confirmation.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isRegistering ? "Loading..." : "Register"}
                </button>
            </div>
            <Link
                className="w-full flex items-center justify-end mt-2 text-sm text-blue-500 hover:text-blue-600 duration-200 transition-all"
                to={"/login"}
            >
                Already have and account? Click here!
            </Link>
        </form>
    );
};

export default Register;
