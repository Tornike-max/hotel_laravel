import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareersPage from "./pages/CareersPage";
import "./App.css";
import Layout from "./ui/Layout";
import CareerShow from "./pages/CareerShow";
import CompanyPage from "./pages/company/CompanyPage";
import CompanyShowPage from "./pages/company/CompanyShowPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<CareersPage />} />
                    <Route path="/careers/:careerId" element={<CareerShow />} />
                    <Route path="/company" element={<CompanyPage />} />
                    <Route
                        path="/company/:companyId"
                        element={<CompanyShowPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
