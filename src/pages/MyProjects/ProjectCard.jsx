/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({project}) => {

    const {id, image, title, technologies, link, github} = project
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
          className="rounded-xl object-cover"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold">
          {title}
        </h2>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-3">
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
        </div>

        {/* Live & GitHub Links */}
        <div className="flex justify-between mt-5">
          <Link to={link} target="_blank" className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            Live Link
          </Link>
          <Link to={github} target="_blank" className="btn btn-outline border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white">
            GitHub
          </Link>
        </div>

        {/* Details Button */}
        <div className="card-actions mt-4">
          <Link
            state={project}
            to={`/details/${id}`}
            className="btn btn-accent w-full transition-transform transform hover:scale-105"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;