import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link, useSearchParams } from "react-router-dom";

interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Company {
    id: number;
    name: string;
    website: string;
    logo: string;
    description: string;
}

interface Career {
    id: number;
    title: string;
    description: string;
    location: string;
    salary: string;
    employment_type: string;
    experience_level: string;
    category_id: number;
    company_id: number;
    category: Category;
    company: Company;
    created_at: string;
    updated_at: string;
}

interface PaginationInterface {
    current_page: number;
    data: Career[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export default function Pagination({ data }: { data: PaginationInterface }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChangePage = (path: string) => {
        if (path === null || path === "") return;
        searchParams.set("page", path.slice(-1));
        setSearchParams(searchParams);
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                    to={data?.prev_page_url || ""}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </Link>
                <Link
                    to={data?.next_page_url || ""}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">{data?.from}</span> to{" "}
                        <span className="font-medium">{data?.to}</span> of{" "}
                        <span className="font-medium">{data?.total}</span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    >
                        <button
                            onClick={() =>
                                handleChangePage(data?.prev_page_url || "")
                            }
                            className={`${
                                data?.prev_page_url === null &&
                                "cursor-not-allowed"
                            } relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                        </button>
                        <p className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {data?.current_page}
                        </p>

                        <button
                            onClick={() =>
                                handleChangePage(data?.next_page_url || "")
                            }
                            className={`${
                                data?.next_page_url === null &&
                                "cursor-not-allowed"
                            } relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
