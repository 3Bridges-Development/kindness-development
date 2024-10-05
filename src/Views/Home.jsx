import React from "react";
import MainBlurb from "../Components/MainBlurb";
import AboutUs from "../Components/AboutUs";
import Center from "../Components/Center";
import Contact from "../Components/Contact";
import newWave3 from "../Assets/newWave3.png";
import wave4 from "../Assets/wave4.png";
import UseContentful from "../Hooks/use-contentful";

const query = `
query {
  aboutPageCollection{
    items{
      backgroundImageOnHomePage{
        title,
        description,
        url,
        width,
        height
      }
    }
  }
}
`

function Home() {
  let { data, errors } = UseContentful(query);

  if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span></span>;

    const homeStyle = {
        backgroundImage:
            `url('${data.aboutPageCollection.items[0].backgroundImageOnHomePage.url}')`,
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
            <div style={homeStyle} alt={data.aboutPageCollection.items[0].backgroundImageOnHomePage.description}>
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