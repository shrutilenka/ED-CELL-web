import "./../footer/footer.css";
import insta from "./../../img/insta.svg";
import ld from "./../../img/linkd.svg";
import twitter from "./../../img/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main">
        <div className="sub-main">
          <h1>Feel free to ping us !</h1>
          <div className="icons">
            <a href="/">
              <img src={insta} alt="" />
            </a>
            <a href="/">
              <img src={ld} alt="" />
            </a>
            <a href="/">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="sub-main">
          <h1>Quick Links</h1>
          <div className="links">
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Team</p>
            <p>Testimonials</p>
          </div>
        </div>
        <div className="sub-main">
          <h1>Get In Touch</h1>
          <div className="info">
            <p>+91-9583785500</p>
            <p>OUTR, Ghatikia, Bhubaneswar pcr@ecell.org.in</p>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", color: "#fffff7" }} />
      <div className="cred">
        <p>Made with ❤️ by web team</p>
      </div>
    </footer>
  );
};

export default Footer;
