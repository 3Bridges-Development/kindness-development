import React from "react";
import Header from "../Components/Header";
import Mission from "../Components/Mission";
import MainBlurb from "../Components/MainBlurb";
import AboutUs from "../Components/AboutUs";
import Center from "../Components/Center";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

function Home() {
    return (
        <div className="home">
            <Header />
            <MainBlurb />
            <Mission />
            <Center />
            <AboutUs />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;