import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <footer className="footer justify-between bg-black/10 items-center border-t p-10">
            <aside>
                <h3 className="text-2xl font-bold max-w-[400px]">My name is Kobirul Islam.</h3>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4  text-5xl">
                    <a href="https://github.com/kobirul5" target="_blank" ><FaGithub></FaGithub></a>
                    <a href="https://www.linkedin.com/in/md-kobirul-islam-103641217" target="_blank">
                        <LiaLinkedin></LiaLinkedin>
                    </a>
                    <a href="https://www.facebook.com/kobirul0k" target="_blank">
                        <FaFacebook></FaFacebook>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;