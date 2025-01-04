/* eslint-disable react/prop-types */

const ProjectCard = ({project}) => {

    const {image, title, technologies, description} = project
    return (
        <div className="card  bg-[#222222] border border-Text-color shadow-xl">
            <figure className="px-5 pt-5">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title">{title}</h2>
                <p> <span className="font-semibold">Description:-</span> {description.slice(0,70)}....</p>
                <p className="flex items-center flex-wrap gap-2"> <span className="font-semibold my-2">Technologies:-</span> {
                    technologies.map((tec,idx)=> <button
                    key={idx}
                    className="btn btn-xs bg-transparent text-Text-color"
                    >
                        {tec}
                    </button>)
                }</p>
                <p className="font-bold"><a href="https://assignment-11-client-1cccb.web.app">Live Link</a></p>
                <div className="card-actions">
                    <button className="btn btn-accent">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;