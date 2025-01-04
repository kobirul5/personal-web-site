import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-240px)] text-center mt-20 text-5xl">
                This Page is not Found
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;