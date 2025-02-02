import { Link, useLocation } from "react-router-dom";

const ProjectDetails = () => {
    const location = useLocation();
    const { image, title, technologies, description, link, github } = location.state;

    return (
        <div className="card my-10 md:w-[80%] mx-auto bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
            <figure className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-4 left-4 text-white font-semibold bg-opacity-70 px-3 py-1 rounded-md">{title}</div>
            </figure>
            <div className="card-body p-6 bg-[#222222]">
                <h2 className="text-3xl font-semibold text-Text-color mb-4">{title}</h2>
                <p className="text-lg text-gray-300 mb-4">
                    <span className="font-semibold">Description:</span> {description}
                </p>
                <p className="flex items-center flex-wrap gap-2 mb-4">
                    <span className="font-semibold my-2 text-lg">Technologies:</span> 
                    {technologies.map((tec, idx) => (
                        <span
                            key={idx}
                            className="bg-accent text-Text-color px-3 py-1 rounded-lg text-xs font-medium shadow-md"
                        >
                            {tec}
                        </span>
                    ))}
                </p>
                <div className="flex gap-4 mb-6">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline text-Text-color border-accent hover:bg-accent hover:text-white transition duration-300 w-48"
                    >
                        Live Demo
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline text-Text-color border-accent hover:bg-accent hover:text-white transition duration-300 w-48"
                    >
                        GitHub Repo
                    </a>
                </div>
                <div className="card-actions">
                    <Link
                        to="/"
                        className="btn btn-accent w-full py-2 text-xl font-semibold rounded-md hover:bg-accent-dark transition duration-300"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
