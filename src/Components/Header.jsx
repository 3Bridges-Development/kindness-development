import React from "react";
// import kdclogo from "../Assets/kdclogo.png";

function Header() {
    return (
    <section className="header">
        <div className="mainHeader">
        {/* Kindness Development Center Inc. */}
            {/* <img src={kdclogo} width="10%" alt="circle with kindness development center inc" className="mainLogo"/> */}
            <span className="title">Kindness Development Center Inc.</span>
        </div>
        <section className="subHeader">
            <div className="subHeaderLabel">
                <a href="#mission">Our Mission</a>
            </div>
            <div className="subHeaderLabel">
                <a href="#thecenter">The Center</a>
            </div>
            <div className="subHeaderLabel">
            <a href="#aboutus">About Us</a>
            </div>
        </section>
    </section>
    )
}

export default Header;