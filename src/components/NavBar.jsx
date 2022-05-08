import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-12 bg-gray-200 dark:bg-slate-600 dark:text-white
                         shadow-inner transition-all duration-300 flex justify-center items-center">
            <nav className="w-screen flex justify-around">
                <NavLink to="/" className="hover:text-ter dark:hover:text-teal-400">HOME</NavLink>
                <NavLink to="/new-date" className="hover:text-ter dark:hover:text-teal-400">NEW DATE</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;

