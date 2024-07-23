import React from "react";
import newWave1 from "../Assets/newWave1.png";
// import wave5 from "../Assets/wave5.png";

// TODO: add top image when content is ready
// const firstStyle = {
//     backgroundImage:
//         // `url('${newWave1Rotated}')`,
//         `url('${wave5}')`,
//         // `url('${newWaveYellow}')`,
//     minHeight: "100vh",
//     backgroundPosition: "center top",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
// };

const secondStyle = {
    backgroundImage:
        `url('${newWave1}')`,
    height: "100vh",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

function WaysToHelp() {

    return (
        <>
            {/* <section className="theWaysToHelp" style={firstStyle}> */}
            <section className="theWaysToHelp" id="howToHelp">
                <p>Ways to Help - Coming Soon...</p>
            </section>
            <section style={secondStyle}>
            </section>
        </>
    )
}

export default WaysToHelp;