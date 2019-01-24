import React, { Component } from "react";

class Career extends Component {
  render() {
    return (
      <div className="career">
        <h2>My Career as software developer</h2>
        <div className="salt">
          <span className="title"> {"<"}/salt></span>
          <br />
          <span className="description">
            School of applied technology fullstack JavaScript Bootcamp 09/2018 - 11/2018
            
          </span>
          <img src="./salt.png" alt="salt diploma" />
          <br />

          <a href="UdacityCertificate.pdf">view certificate</a>
          <br />
        </div>
        <div className="udacity">
          <span className="title">Udacity</span>
          <br />
          <span className="description">
            Google Developer Scholarship Recipient in Front-end web development
            Introduction Course: 11/2017 - 02/2018
            <br /><br />
            Google Developer Scholarship Recipient in Front-End Web Developer
            Nanodegree Program: 02/2018 - 08/2018
          </span>
          <img src="./udacity.png" alt="udacity certificate" />
          <br />

          <a href="UdacityCertificate.pdf">view certificate</a>
          <br />
        </div>
      </div>
    );
  }
}

export default Career;
