import AboutMe from "../AboutMe/AboutMe";
import MySkills from "../MySkills/MySkills";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MySkills></MySkills>
        </div>
    );
};

export default Home;