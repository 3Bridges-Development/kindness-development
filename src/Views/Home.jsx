import React from "react";
import Header from "../Components/Header";
import Mission from "../Components/Mission";
import MainBlurb from "../Components/MainBlurb";
import AboutUs from "../Components/AboutUs";
import Center from "../Components/Center";
import Footer from "../Components/Footer";
import wave1 from "../Assets/wave1.png";
import wave4 from "../Assets/wave4.png";
import wave6 from "../Assets/wave6.png";
import cafe from "../Assets/cafeImage.jpeg";
import Contact from "../Components/Contact";

function Home() {

    const homeStyle = {
        backgroundImage:
            `url('${cafe}')`,
        height: "90vh",
        // marginTop: "-70px", // leaving as an example
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const firstStyle = {
        backgroundImage:
            `url('${wave1}')`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const secondStyle = {
        backgroundImage:
            `url('${wave4}')`,
        height: "80vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const thirdStyle = {
        backgroundImage:
            `url('${wave6}')`,
        height: "80vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="home">
            <Header />
            <div style={homeStyle}>
                <MainBlurb />
            </div>
            <div style={firstStyle}>
                <Mission />
            </div>
            <div style={secondStyle}>
                <Center />
            </div>
            <AboutUs />
            <div style={thirdStyle}>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Home;