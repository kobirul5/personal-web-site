import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const MyProjects = () => {
    const [projects, setProjects]= useState([])

    useEffect(()=>{
        fetch("projects.json")
        .then((res)=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div className="container mb-20 mx-auto px-4 ">
            <Element
            name="projectSection"
            >

             <h1 className="text-3xl md:text-5xl text-center font-bold">My Projects</h1>
            </Element>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                {
                    projects.map((project,idx)=> <ProjectCard
                    key={idx}
                    project={project}
                    ></ProjectCard> )
                }
            </div>
        </div>
    );
};

export default MyProjects;