import { Link, useLocation } from "react-router-dom";

const ProjectDetails = () => {
    const location = useLocation();
    const { image, title, technologies, description, link,features, github_client, github_server } = location.state;

    return (
        <div className="card my-10 md:w-4/5 mt-32 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <figure className="relative">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover border-b pb-2 rounded-t-lg"
            />
        </figure>
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">
                <span className="font-semibold">Description:</span> {description}
            </p>
            <div className="mb-4">
                <span className="font-semibold text-lg">Technologies:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies?.map((tec, idx) => (
                        <span
                            key={idx}
                            className="bg-gray-200 px-3 py-1 rounded-md text-sm font-medium"
                        >
                            {tec}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <span className="font-semibold text-lg">Features:</span>
                <ul className="list-disc ml-5 mt-2">
                    {features?.map((feature, idx) => (
                        <li key={idx} className="text-sm">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-4 mb-6">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    Live Demo
                </a>
                <Link
                    to={github_client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    GitHub Client
                </Link>
                <Link 
                    to={github_server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    GitHub Server
                </Link>
            </div>
            <div className="text-center">
                <Link 
                    to="/"
                    className="btn  w-full bg-Highlights-color border-Highlights-color hover:border-Highlights-color hover:bg-white"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ProjectDetails;
