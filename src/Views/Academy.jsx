import React from "react";
import AcademyInfo from "../Components/AcademyInfo";
import newWave2Rotate from "../Assets/newWave2Rotate.png";
import newWave3 from "../Assets/newWave3.png";

const firstStyle = {
    backgroundImage:
        `url('${newWave2Rotate}')`,
    minHeight: "100vh",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const secondStyle = {
    backgroundImage:
        `url('${newWave3}')`,
    height: "50vh",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

function Academy() {

    return (
        <>
            <div style={firstStyle}>
                <AcademyInfo />
            </div>
            <section style={secondStyle}>
            </section>
        </>
    )
}

export default Academy;