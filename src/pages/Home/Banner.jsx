import { FaDownload, FaFacebook, FaGithub } from "react-icons/fa";
import bannerImg from "../../assets/kobirul.png"
import { LiaLinkedin } from "react-icons/lia";
const Banner = () => {
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src={bannerImg}
                        className="rounded-lg w-full " />
                </div>
                <div className="flex-1">
                    <h1 className="flex-1  text-5xl font-bold">Hi, <br /> I am Kobirul Islam</h1>
                    <p className="pt-6 font-bold ">Web Developer | Problem Solver |  </p>
                    <p className="pb-6 ">Turning ideas into dynamic, user-friendly digital experiences. </p>
                    <div className="flex gap-2 text-3xl pb-6">
                        <a href="https://github.com/kobirul5" target="_blank" ><FaGithub></FaGithub></a>
                        <a href="https://www.linkedin.com/in/md-kobirul-islam-103641217" target="_blank">
                            <LiaLinkedin></LiaLinkedin>
                        </a>
                        <a href="https://www.facebook.com/kobirul0k" target="_blank">
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                    <button className="btn bg-transparent text-Text-color"><FaDownload></FaDownload> Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;