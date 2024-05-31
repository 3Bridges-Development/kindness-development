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

    // keeping in case I add image back in
    // const thirdStyle = {
    //     // backgroundImage:
    //     //     `url('${newWave2Rotate}')`,
    //     // // height: "80vh",
    //     // backgroundPosition: "center",
    //     // backgroundSize: "cover",
    //     // backgroundRepeat: "no-repeat",
    //     // backgroundColor: "#EFE552"
    // };

    const fourthStyle = {
        backgroundImage:
            `url('${newWave3}')`,
        height: "70vh",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="home">
            <div style={homeStyle}>
                <MainBlurb />
            </div>
            <div style={secondStyle}>
                <Center />
            </div>
            {/* <div style={thirdStyle}> */}
            <div>
                <AboutUs />
            </div>
            <div style={fourthStyle}>
                <Contact />
            </div>
        </div>
    )
}

export default Home;