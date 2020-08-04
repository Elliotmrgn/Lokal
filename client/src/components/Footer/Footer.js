import React from "react";
import { Redirect, Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#5B9098",
          color: "white",
          padding: "30px",
          bottom: "0",
          left: "0",
          width: "100%",
          flexShrink: "0",
        }}
      >
        <div className="footer-container">
          <span id="copyright">
            &copy; {new Date().getFullYear()}
            &nbsp;COPYRIGHT{" "}
          </span>
          <Link to="/contact" id="contact-link" style={{ color: "White" }}>
            CONTACT
          </Link>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
