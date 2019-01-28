import React, { Component } from "react";

const Footer = ({ title }) => <footer>{title}</footer>;

class Contact extends Component {
  render() {
    return (
      <div className="footer">
        <Footer
          title={
            <div className="footer-wrapper">
              <a className="footer-icon" href="https://linkedin.com/in/suzette-sonnekus">
                <img
                  className="contact-icon"
                  src="./Linkedin.png"
                  alt="linkedin logo"
                />
              </a>
              <a className="footer-icon" href="https://github.com/SuzetteSon">
                <img
                  className="contact-icon"
                  src="./Octocat.png"
                  alt="github logo"
                />
              </a>
              <a className="footer-icon" href="mailto:suzette.sonnekus@appliedtechnology.se">
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
