// import React, { useState } from "react";
// import "./../footer/footer.css";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Submitting email: ${email}`);
//   };

//   return (
//     <footer className="footer">
//       <form className="subscribe-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Subscribe</button>
//       </form>
//       <div className="social-icons">
//         <a href="/">
//           <i className="fa fa-facebook-square"></i>
//         </a>
//         <a href="/">
//           <i className="fa fa-twitter-square"></i>
//         </a>
//         <a href="/">
//           <i className="fa fa-instagram"></i>
//         </a>
//         <a href="/">
//           <i className="fa fa-linkedin"></i>
//         </a>
//       </div>
//       <p>Copyright ©2023 Example Company</p>
//     </footer>
//   );
// };

// export default Footer;
import "./../footer/footer.css";
import insta from "./../../img/insta.svg";
import ld from "./../../img/linkd.svg";
import twitter from "./../../img/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main">
        <div className="sub-main">
          <p>Feel free to ping us !</p>
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
          <p>Quick Links</p>
          <div className="links">
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Team</p>
            <p>Testimonials</p>
          </div>
        </div>
        <div className="sub-main">
          <p>Get In Touch</p>
          <div className="info">
            <p>+91-9583785500</p>
            <p>KIIT University, Patia, Bhubaneswar pcr@ecell.org.in</p>
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
