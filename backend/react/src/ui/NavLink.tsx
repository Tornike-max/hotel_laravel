import { Link } from "react-router-dom";

const NavLink = ({ path, label }: { path: string; label: string }) => {
    return (
        <Link
            className="text-base text-blue-400 hover:text-blue-600 duration-150 transition-all"
            to={path}
        >
            {label}
        </Link>
    );
};

export default NavLink;
