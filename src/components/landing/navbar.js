import { useState } from "react";
import "./../../components/landing/navbar.css";
import logo from "./../../img/logo.png";

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
      <div className="logo">
        <img src={logo} alt="" style={{ height: "4.5rem" }} />
      </div>
      <div className="menu-icon">
        <button
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={openNav}
        >
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
    </div>
  );
};

export default Navbar;
