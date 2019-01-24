import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
      return (
        <div className="AboutMe">
            <h2>About Me</h2>
            <img className="suzPic" src="./IMG_5231.jpg" alt="pic of suzette" />
            <p>Former Career: Accountant</p><br />
            <p>Lives in: Stockholm, Sweden  <img className="flag" src="./sweden.png" alt="flag of sweden" /> </p>
            <br />
            <p>From: Cape Town, South Africa  <img className="flag"  src="./southafrica.jpg" alt="flag of south africa" /> </p>
            <br />
            <p>Hobbies include: podcasts, boardgames, playstation, fika, movies and much more.  </p><br /> 
            <p>Why programming? I believe I have the passion and motivation 
              to thrive in the ever evolving and growing tech industry. 
              I am curious and learn quickly, I enjoy working in teams and  
              bringing out the best in people. Building great user experiences  
              on the web and creating awesome applications gives me great job satisfaction.</p><br />
            <br /><br /><br />
            <h3>My favourite podcasts:</h3>
            <br /><span>Ctrl Alt Delete  </span><br />
            <iframe title="ctrl,alt,delete" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling="no" width="50%" height="150" frameborder="0" src="https://embed.radiopublic.com/e?if=ctrl-alt-delete-Wk1Lnl&ge=s1!070da8c2ef2f40d35a88b694afc1ed3481d8a87c"></iframe>
            <br /><span>Front End Happy Hour  </span><br />
            <iframe title="frontendhappyhour" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling="no" width="50%" height="150" frameborder="0" src="https://embed.radiopublic.com/e?if=front-end-happy-hour-G4RmZN&ge=s1!482fa1f9bd48e322416fa57b874d6c003a117f70"></iframe>
            <br /><span>The High Low </span><br />
            <iframe title="the high low" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling="no" width="50%" height="150" frameborder="0" src="https://embed.radiopublic.com/e?if=the-high-low-6rVVd9&ge=s1!406664c79dd4d40c693337e11793bf55620fc786"></iframe>
            <br /><span>Developer Tea  </span><br />
            <iframe title="developer Tea" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling="no" width="50%" height="150" frameborder="0" src="https://embed.radiopublic.com/e?if=developer-tea-6N9lpw&ge=s1!84a9307b0e0983d71af5a17b9a5065b537d39375"></iframe>
            <br /><span>Javascript Jabber  </span><br />
            <iframe title="javascript jabber" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling="no" width="50%" height="150" frameborder="0" src="https://embed.radiopublic.com/e?if=all-javascript-podcasts-by-devcha-WwEoX8&ge=s1!c899acc726b0cec98095d16c67067e95cfddd289"></iframe>
        
        </div>

      );
    }
  }
  
  export default AboutMe;
  