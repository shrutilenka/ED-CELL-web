import React, { useEffect } from "react";
import lottie from "lottie-web";
import "./../../styles/style.css";
import Navbar from "./navbar";

const Landing = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".container"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./../../rocket.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  }, []);

  return (
    <div className="landing-banner">
      <Navbar />
      <section className="banner">
        <div className="text">
          <p>
            something for us <br /> rest for others !
          </p>
        </div>
        <div className="container" />
      </section>
    </div>
  );
};

export default Landing;
