import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";

const Footer = ({ title }) => <footer>{title}</footer>;

class Contact extends Component {
  render() {
    return (
      <div className="footer">
        <Footer
          title={
            <div>
              <a href="https://linkedin.com/in/suzette-sonnekus">
                <img
                  className="contact-icon"
                  src="./Linkedin.png"
                  alt="linkedin logo"
                />
              </a>
              <a href="https://github.com/SuzetteSon">
                <img
                  className="contact-icon"
                  src="./Octocat.png"
                  alt="github logo"
                />
              </a>
              <a href="mailto:suzette.sonnekus@appliedtechnology.se">
                <img
                  className="contact-icon"
                  src="./email.png"
                  alt="email logo"
                />
              </a>
            </div>
          }
        />
      </div>
    );
  }
}

export default Contact;
