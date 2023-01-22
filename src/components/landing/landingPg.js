import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./../../styles/style.css";

const Landing = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./../../rocket.json"),
    });
  }, []);

  return (
    <div className="landing-banner">
      <dic className="text">
        <p>
          something for us <br /> rest for others !
        </p>
      </dic>
      <div className="container" ref={container}></div>
    </div>
  );
};

export default Landing;
