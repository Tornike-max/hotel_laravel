import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareersPage from "./pages/CareersPage";
import UsersPage from "./pages/UsersPage";
import Layout from "./ui/layout";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<CareersPage />} />
                    <Route path="/users" element={<UsersPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
