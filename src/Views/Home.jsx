import React from "react";
import Header from "../Components/Header";
import Mission from "../Components/Mission";
import MainBlurb from "../Components/MainBlurb";
import AboutUs from "../Components/AboutUs";
import Center from "../Components/Center";
import Footer from "../Components/Footer";
// import wave6 from "../Assets/wave6.png";
import cafe from "../Assets/cafeImage.jpeg";
import Contact from "../Components/Contact";
import newWaveBlue from "../Assets/newWaveBlue.png";
import newWaveYellow from "../Assets/newWaveYellow.png";
import newWave3 from "../Assets/newWave3.png";
// import newWave2Rotate from "../Assets/newWave2Rotate.png";
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

    const firstStyle = {
        backgroundImage:
            `url('${newWaveYellow}')`,
        minHeight: "100vh",
        // minHeight: "100%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const secondStyle = {
        // backgroundColor: "#607196"
        backgroundImage:
            `url('${wave4}')`,
        minHeight: "100vh",
        // minHeight: "100%",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const thirdStyle = {
        // backgroundImage:
        //     `url('${newWave2Rotate}')`,
        // // height: "80vh",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundColor: "#EFE552"
    };

    const fourthStyle = {
        // backgroundImage:
        //     `url('${wave6}')`,
        backgroundImage:
            `url('${newWave3}')`,
        height: "100vh",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="home">
            <Header />
            <div style={homeStyle}>
                <MainBlurb />
            </div>
            <div style={secondStyle}>
                <Center />
            </div>
            <div style={thirdStyle}>
                <AboutUs />
            </div>
            {/* move to other page */}
            <div style={firstStyle}>
                <Mission />
            </div>
            <div style={fourthStyle}>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Home;