import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <Link
            to="/home/aboutme"
            scroll={el =>
              el.scrollIntoView({ behavior: "instant", block: "end" })
            }
          >
            About me
          </Link>
          <Link
            to="/home/github"
            scroll={el =>
              el.scrollIntoView({ behavior: "instant", block: "end" })
            }
          >
            Github projects
          </Link>
          <Link to="/home/github">Gallary of projects</Link>
          <Link to="/home/github">Contact</Link>
        </nav>
        <header className="App-header">
          <span>
            Hi, I'm Suzette <br />
            <p className="text">
              I'm a software developer, <br />
              welcome to my portfolio site.
            </p>
          </span>
        </header>
      </div>
    );
  }
}

export default Home;
