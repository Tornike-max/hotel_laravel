import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const access_token = localStorage.getItem("access_token");

    if (!userId || !access_token) {
        navigate("/login");
        return;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
