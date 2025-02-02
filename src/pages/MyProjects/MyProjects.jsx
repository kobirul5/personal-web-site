import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
const MyProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <Element name="projectSection">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="container my-20 mx-auto px-4 ">
                <div
                    
                >

                    <h1 className="text-3xl md:text-5xl text-center font-bold ">My Projects</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                    {
                        projects.slice(0,3).map((project, idx) => <ProjectCard
                            key={idx}
                            project={project}
                        ></ProjectCard>)
                    }
                </div>
            </motion.div>
        </Element>
    );
};

export default MyProjects;