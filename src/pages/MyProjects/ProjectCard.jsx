/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({project}) => {

  const {id, image, title, link, github_client, github_server } =  project
    return (
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card border shadow-xl bg-white  rounded-xl overflow-hidden"
    >
      {/* Project Image */}
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-[200px] object-cover"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold">
          {title}
        </h2>
        
        {/* Technologies */}
        {/* <div className="flex flex-wrap gap-2 mt-3">
          <span className="font-semibold ">Technologies:</span>
          {technologies.map((tec, idx) => (
            <motion.button
              key={idx}
              className="btn btn-xs bg-gray-200  rounded-full px-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {tec}
            </motion.button>
          ))}
        </div> */}

        {/* Live & GitHub Links */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-1 mt-5">
          <Link to={link} target="_blank" className="btn btn-outline border-Highlights-color hover:border-Highlights-color hover:bg-Highlights-color hover:text-black  ">
            Live Link
          </Link>
          <Link to={github_client} target="_blank" className="btn btn-outline border-Highlights-color hover:border-Highlights-color hover:bg-Highlights-color hover:text-black  ">
            GitHub Client
          </Link>
          <Link to={github_server} target="_blank" className="btn btn-outline border-Highlights-color hover:border-Highlights-color hover:bg-Highlights-color hover:text-black  ">
            GitHub Server
          </Link>
        </div>

        {/* Details Button */}
        <div className="card-actions mt-4">
          <Link
            state={project}
            to={`/details/${id}`}
            className="btn w-full bg-Highlights-color hover:bg-white border-Highlights-color hover:border-Highlights-color" 
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;