import Marquee from "react-fast-marquee";

const MySkills = () => {
    return (
        <div className="my-20 flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl md:text-5xl text-center font-bold">My Skills</h1>
            <div className="md:w-8/12">
                <Marquee>
                    <div className="flex flex-wrap gap-4 mt-8 justify-center md:gap-8">
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color ml-8">HTML</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">CSS</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">Tailwind</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">JavaScript</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">React</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">Node JS</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">Express Js</h3>
                        <h3 className="btn bg-transparent border-accent hover:bg-accent text-Text-color">Mongo DB</h3>
                    </div>
                </Marquee>

            </div>
        </div>
    );
};

export default MySkills;