import { NavLink } from "react-router-dom";
import { FaFire } from "react-icons/fa"

const Navbar = () => {
    return (
        <div className="h-12 bg-gray-200 dark:bg-slate-600">
            <nav className="flex justify-evenly">
                <NavLink to="/"> <NavBarIcon icon={<FaFire size="30"/>} /> </NavLink>
                <NavLink to="/"> <NavBarIcon icon={<FaFire size="30"/>} /> </NavLink>
                <NavLink to="/"> <NavBarIcon icon={<FaFire size="30"/>} /> </NavLink>
                <NavLink to="/"> <NavBarIcon icon={<FaFire size="30"/>} /> </NavLink>
            </nav>
        </div>
    )
}

const NavBarIcon = ({ icon, text="tooltip" }) => (
    <div className="navbar-icon">
        {icon}   
    </div>
)

export default Navbar;

/**
 * <span className="navbar-tooltip">
            {text}
        </span>
 */