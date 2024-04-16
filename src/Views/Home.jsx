import React from "react";
import Header from "../Components/Header";
// import kdclogo from "../Assets/kdclogo.png";
import Mission from "../Components/Mission";
import MainBlurb from "../Components/MainBlurb";
import AboutUs from "../Components/AboutUs";
import Center from "../Components/Center";

function Home() {
    return (
        <div className="home">
            <Header />
            <MainBlurb />
            {/* <img src={kdclogo} width="10%" alt="circle with kindness development center inc" className="mainLogo"/> */}
            <Mission />
            <Center />
            <AboutUs />
        </div>
    )
}

export default Home;