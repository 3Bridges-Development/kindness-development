import React from "react";
import Mission from "../Components/Mission";
import wave5 from "../Assets/wave5.png";
import newWave1 from "../Assets/newWave1.png";
import Programs from "../Components/Programs";

const firstStyle = {
    backgroundImage:
        `url('${wave5}')`,
    minHeight: "100vh",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const secondStyle = {
    backgroundImage:
        `url('${newWave1}')`,
    height: "50vh",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

function Services() {

    return (
        <>
            <div className="services" style={firstStyle}>
                <Mission />
            </div>
            <Programs />
            <section style={secondStyle}>
            </section>
        </>
    )
}

export default Services;