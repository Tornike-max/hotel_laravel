import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";

const TopBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
            {/* Search */}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="border border-gray-300 p-2 rounded-md w-1/2 focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300"
            />

            {/* Profile Dropdown */}
            <Menu as="div" className="relative">
                <Menu.Button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-all duration-300">
                    Profile
                </Menu.Button>
                <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#profile"
                                    className={`block px-4 py-2 text-gray-700 ${
                                        active ? "bg-gray-100" : ""
                                    }`}
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#logout"
                                    className={`block px-4 py-2 text-gray-700 ${
                                        active ? "bg-gray-100" : ""
                                    }`}
                                >
                                    Logout
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default TopBar;
