import { HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
    return (
        <div className="bg-gray-900 text-white w-64 h-screen flex flex-col p-5 shadow-lg">
            <div className="text-2xl font-bold mb-10">Admin Panel</div>
            <nav>
                <ul className="space-y-4">
                    <li>
                        <NavLink
                            to="/dashboard"
                            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition-all duration-300"
                        >
                            <HomeIcon className="h-5 w-5 mr-3" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users"
                            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition-all duration-300"
                        >
                            <UserIcon className="h-5 w-5 mr-3" />
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition-all duration-300"
                        >
                            <HiOutlineCog6Tooth className="h-5 w-5 mr-3" />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminSideBar;
