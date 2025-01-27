import { motion } from "motion/react"
const AboutMe = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
           whileInView={{y:0, opacity:1}}
            transition={{ duration: 0.9, delay: 0.2 }}
        >
            <div className="container mx-auto px-4 py-20 bg-[#222222]">

                <h1 className="text-3xl md:text-5xl text-center font-bold">About Me</h1>

                <p className="text-justify md:px-20 mt-2">
                    My name is Kobirul Islam. I completed my diploma in Pharmacy in 2022. However, I have always been passionate about computers. After completing my studies, I started a job in October 2023 at Popular Diagnostic and worked there until February 2024. Unfortunately, I didn&apos;t enjoy the job and realized it wasn&apos;t the right path for me.During this time, I discovered my interest in programming, which gave me a sense of excitement and fulfillment. I decided to quit my job, return home, and fully focus on learning programming. Since then, I have been pursuing MERN stack web development, and it has been an incredible journey of growth and learning.</p>
            </div>
        </motion.div>
    );
};

export default AboutMe;