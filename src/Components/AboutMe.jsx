import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
      return (

        <div className="AboutMe">
            <h2>About Me</h2>
            <img className="suzPic" src="./IMG_5231.jpg" alt="pic of suzette" />
            <span>Age: 30</span><br />
            <span>Lives in: Stockholm, Sweden  </span>
            <img className="flag" src="./sweden.png" alt="flag of sweden" /><br />
            <span>From: Cape Town, South Africa  </span>
            <img className="flag"  src="./southafrica.jpg" alt="flag of south africa" /><br />
        </div>
      );
    }
  }
  
  export default AboutMe;
  