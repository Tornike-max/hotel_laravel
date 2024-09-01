import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DisclosureComponent from "../components/DisclosureComponent";

export default function Layout() {
    return (
        <>
            <div className="min-h-full">
                <DisclosureComponent />

                <Header />
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}
