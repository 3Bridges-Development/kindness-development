import React from "react";
import MainBlurb from "../Components/MainBlurb";
import AboutUs from "../Components/AboutUs";
import Center from "../Components/Center";
import cafe from "../Assets/cafeImage.jpeg";
import Contact from "../Components/Contact";
import newWave3 from "../Assets/newWave3.png";
import wave4 from "../Assets/wave4.png";

function Home() {

    const homeStyle = {
        backgroundImage:
            `url('${cafe}')`,
        minHeight: "70vh",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const secondStyle = {
        backgroundImage:
            `url('${wave4}')`,
        minHeight: "100vh",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const fourthStyle = {
        backgroundImage:
            `url('${newWave3}')`,
        height: "50vh",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="home">
            <div style={homeStyle} alt="Background image of girl sitting in cafe">
                <MainBlurb />
            </div>
            <div style={secondStyle} alt="Background image of blue wave">
                <Center />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                <Contact />
            </div>
            <section style={fourthStyle} alt="Background image of blue wave">
            </section>
        </div>
    )
}

export default Home;