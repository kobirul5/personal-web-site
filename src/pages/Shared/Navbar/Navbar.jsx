import { FaBars, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import CVpdf from "../../../assets/Kobirul.pdf"
import { scroller } from "react-scroll";
const Navbar = () => {



    const scrollToSection = (targetSection) => {
        scroller.scrollTo(targetSection, {
            duration: 800, // Smooth scrolling duration in milliseconds
            delay: 0,
            smooth: "easeInOutQuart", // Scrolling animation
            offset: -130,
            // spy: true, 
        });
    };

    const links = <>
        <li><Link className="nav-link" onClick={()=>scrollToSection("homeSection")}  >Home</Link></li>
        <li><Link className="nav-link" onClick={()=>scrollToSection("about")}  >About Me</Link></li>
        <li><Link className="nav-link" onClick={()=>scrollToSection("skillsSection")} >Skills</Link></li>
        <li><Link className="nav-link" onClick={()=>scrollToSection("projectSection")} >Portfolio</Link></li>
    </>
    return (
        <div className="navbar border-b backdrop-blur-sm fixed  top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  font-bold dropdown-content gap-2  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Kobirul</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  font-bold menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={CVpdf} download="My-Resume" target='_blank' className="btn bg-transparent "> <FaDownload></FaDownload> Download Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;