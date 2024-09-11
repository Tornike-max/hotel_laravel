import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareersPage from "./pages/career/CareersPage";
import "./App.css";
import Layout from "./ui/Layout";
import CareerShow from "./pages/career/CareerShow";
import CompanyPage from "./pages/company/CompanyPage";
import CompanyShowPage from "./pages/company/CompanyShowPage";
import CareerShowRatesPage from "./pages/career/CareerShowRatesPage";
import CareerCreatePage from "./pages/career/CareerCreatePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import AuthLayout from "./ui/AuthLayout";
import AdminPage from "./pages/admin/AdminPage";
import AdminLayout from "./components/admin/AdminLayout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/" element={<CareersPage />} />
                    <Route path="/careers/:careerId" element={<CareerShow />} />
                    <Route
                        path="/careers/show"
                        element={<CareerShowRatesPage />}
                    />
                    <Route
                        path="/careers/create"
                        element={<CareerCreatePage />}
                    />
                    <Route path="/company" element={<CompanyPage />} />
                    <Route
                        path="/company/:companyId"
                        element={<CompanyShowPage />}
                    />
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/careers" element={<AdminPage />} />
                    <Route path="/admin/update" element={<AdminPage />} />
                    <Route path="/admin/create" element={<AdminPage />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
