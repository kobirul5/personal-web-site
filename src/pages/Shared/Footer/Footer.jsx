import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <p className="text-2xl font-bold mb-4">About Me</p>
                <p className="max-w-[400px]">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium deleniti consectetur voluptatum temporibus quae est dolores sunt libero quasi quisquam quis, inventore eos reprehenderit a expedita reiciendis necessitatibus vitae, ex rem numquam fugit quibusdam aspernatur. Dignissimos molestiae nulla iure ducimus perferendis? Dignissimos harum quis sequi non, autem eum! Nulla.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-2xl">Social</h6>
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