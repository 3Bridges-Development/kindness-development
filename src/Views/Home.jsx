import React from "react";
import Header from "../Components/Header";
import kdclogo from "../Assets/kdclogo.png";

function Home() {
    return (
        <div className="home">
            <Header />
            <img src={kdclogo} width="10%" alt="circle with kindness development center inc" className="mainLogo"/>
        </div>
    )
}

export default Home;