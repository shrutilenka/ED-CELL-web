import React, { useState } from "react";
import "./../../styles/style.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
  };

  return (
    <footer className="footer">
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <div className="social-icons">
        <a href="/">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="/">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <p>Copyright ©2023 Example Company</p>
    </footer>
  );
};

export default Footer;
