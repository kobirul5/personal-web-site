import { FaBars, FaDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import CVpdf from "../../../assets/Kobirul.pdf"
const Navbar = () => {



    const links = <>
    <li><NavLink to="/" >Home</NavLink></li>
    <li><NavLink to="/about" >About Me</NavLink></li>
    <li><NavLink to="/skills" >Skills</NavLink></li>
    </>
    return (
        <div className="navbar border-b backdrop-blur-sm sticky  top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Kobirul</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={CVpdf} download="My-Resume" target='_blank' className="btn bg-transparent text-Text-color"> <FaDownload></FaDownload> Download Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;