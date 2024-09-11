import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import TopBar from "./TopBar";
import { motion } from "framer-motion";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            <AdminSideBar />
            <div className="flex flex-col flex-grow">
                <TopBar />
                <motion.main
                    className="p-6 bg-gradient-to-b from-gray-100 to-gray-200 flex-grow overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Outlet />
                </motion.main>
            </div>
        </div>
    );
};

export default AdminLayout;
