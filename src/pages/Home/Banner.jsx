import { FaDownload, FaFacebook, FaGithub } from "react-icons/fa";
import bannerImg from "../../assets/kobirul.png"
import { LiaLinkedin } from "react-icons/lia";
import CVpdf from "../../assets/Kobirul.pdf"
import { Link } from "react-router-dom";
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div
            name="homeSection"
        >
            <div className="hero ">
                <div className="hero-content pb-0 flex-col lg:flex-row">
                    <div className="flex-1">
                        <motion.h1
                            className="flex-1  text-5xl font-bold"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                        >Hi, <br /> I am Kobirul Islam</motion.h1>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="pt-6 font-bold ">Web Developer | Problem Solver |  </motion.p>
                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pb-6 "
                        >Turning ideas into dynamic, user-friendly digital experiences. </motion.p>
                        <div className="flex gap-2 text-3xl pb-6">
                            <motion.a
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                href="https://github.com/kobirul5" target="_blank" ><FaGithub></FaGithub></motion.a>
                            <motion.a
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: 0.5 }}
                                href="https://www.linkedin.com/in/md-kobirul-islam-103641217" target="_blank">
                                <LiaLinkedin></LiaLinkedin>
                            </motion.a>
                            <motion.a
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: 0.2 }}
                                href="https://www.facebook.com/kobirul0k" target="_blank">
                                <FaFacebook></FaFacebook>
                            </motion.a>
                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                        >
                            <Link to={CVpdf} download="My-Resume" target='_blank' className="btn bg-transparent text-Text-color"><FaDownload></FaDownload> Download Resume</Link>
                        </motion.div>
                    </div>
                    <motion.div className="flex-1"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.5 }}>
                        <img
                            src={bannerImg}
                            className="rounded-lg w-full " />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;