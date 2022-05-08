import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-12 bg-gray-200 dark:bg-slate-600 dark:text-white
                         shadow-inner transition-all duration-300">
            <nav className="flex justify-evenly">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/new-date">NEW DATE</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;

