import { useState } from "react";
import "./../../styles/style.css";

const Navbar = () => {
  const [sidenavWidth, setSidenavWidth] = useState("0px");

  const openNav = () => {
    setSidenavWidth("250px");
  };

  const closeNav = () => {
    setSidenavWidth("0px");
  };

  return (
    <div className="landing-nav">
      <button style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776;
      </button>
      <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Clients</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
