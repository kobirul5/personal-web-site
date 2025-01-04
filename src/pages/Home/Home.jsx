import AboutMe from "../AboutMe/AboutMe";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MySkills></MySkills>
           <MyProjects></MyProjects>
        </div>
    );
};

export default Home;