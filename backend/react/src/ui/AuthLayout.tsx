import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
