import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareersPage from "./pages/CareersPage";
import UsersPage from "./pages/UsersPage";
import "./App.css";
import Layout from "./ui/Layout";
import CareerShow from "./pages/CareerShow";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<CareersPage />} />
                    <Route path="/careers/:careerId" element={<CareerShow />} />
                    <Route path="/users" element={<UsersPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
