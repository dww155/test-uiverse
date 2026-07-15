import { NavLink } from "react-router-dom";
import Switch from "./light-switch.tsx";

const Header = () => {
    const navItems = [
        {
            name: "Home",
            path: "/home",
        },
        {
            name: "Hamster",
            path: "/loader_hamster",
        },
        {
            name: "Astronaut",
            path: "/loader_astronaut",
        },
        {
            name: "Sand timer",
            path: "/sand_timer",
        },
    ];

    return (
        <header className="w-full  bg-transparent shadow-md">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <ul className="flex items-center justify-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `
                                    relative text-gray-700 font-medium
                                    transition duration-300
                                    hover:text-blue-600
                                    text-white
                                    ${
                                        isActive
                                            ? "text-blue-600"
                                            : ""
                                    }
                                    `
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.name}

                                        {isActive && (
                                            <span
                                                className="
                                                absolute
                                                left-0
                                                -bottom-2
                                                w-full
                                                h-0.5
                                                bg-blue-600
                                                rounded-full
                                                "
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                        <Switch />
                </ul>
            </nav>
        </header>
    );
};

export default Header;