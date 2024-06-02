import React from "react";
import AcademyInfo from "../Components/AcademyInfo";
import newWave2Rotate from "../Assets/newWave2Rotate.png";
import newWave3 from "../Assets/newWave3.png";

const firstStyle = {
    backgroundImage:
        `url('${newWave2Rotate}')`,
    minHeight: "100vh",
    backgroundPosition: "center top",
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
            <div style={firstStyle} alt="Background image of blue wave">
                <AcademyInfo />
            </div>
            <section style={secondStyle} alt="Background image of blue wave">
            </section>
        </>
    )
}

export default Academy;