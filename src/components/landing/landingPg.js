// import React, { useEffect } from "react";
// import lottie from "lottie-web";
import "./../../components/landing/landing.css";
import Navbar from "./navbar";
import { Carousel } from "antd";

const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Landing = () => {
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector(".container"),
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: true,
  //     animationData: require("./../../rocket.json"),
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   });
  // }, []);

  return (
    <div className="hero">
      <Navbar />
      <section className="banner">
        <div className="left">
          <h1>ENTREPRENEURSHIP</h1>
          <h1>DEVELOPMENT CELL</h1>
          <p>
            A major innovation hub for technology ventures and a site for
            interfacing with the industry, academia, government bodies, and
            cross-border agencies. A major innovation hub for technology
            ventures and a site for interfacing with the industry, academia,
            government bodies, and cross-border agencies
          </p>
        </div>
        <div className="carousel">
          <Carousel autoplay autoplaySpeed={2000} className="banner-carousel">
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Landing;
