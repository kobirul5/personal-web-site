import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <p className="text-2xl font-bold mb-4">About Me</p>
                <p className="max-w-[400px]">My name is Kobirul Islam. I completed my diploma in Pharmacy in 2022. However, I have always been passionate about computers. After completing my studies, I started a job in October 2023 at Popular Diagnostic and worked there until February 2024. Unfortunately, I didn&apos;t enjoy the job and realized it wasn&apos;t the right path for me.During this time, I discovered my interest in programming, which gave me a sense of excitement and fulfillment. I decided to quit my job, return home, and fully focus on learning programming. Since then, I have been pursuing MERN stack web development, and it has been an incredible journey of growth and learning.
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