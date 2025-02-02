import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss, SiDaisyui } from "react-icons/si";
import { motion } from "framer-motion";
import { Element } from "react-scroll";


const MySkills = () => {

    const skills = [
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: "DaisyUI", icon: <SiDaisyui className="text-purple-500" /> },

    ];

    return (
        <motion.section
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="py-20 bg-gray-100 ">
            <Element name="skillsSection" className="max-w-4xl  mx-auto text-center">
                <h2  className="text-3xl md:text-5xl text-center font-bold  ">My Skills</h2>
                <p className="mt-2">Technologies I work with</p>
            </Element>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="p-4 bg-white  rounded-xl shadow-md flex flex-col items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="text-4xl">{skill.icon}</div>
                        <p className="text-gray-700 font-medium">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MySkills;