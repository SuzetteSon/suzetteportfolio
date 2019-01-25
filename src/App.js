import React, { Component } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe.jsx";
import GithubLinks from "./Components/GithubLinks.jsx";
import Home from "./Components/Home.jsx";
import { HashLink as Link } from "react-router-hash-link";
import Contact from "./Components/Contact";
import scrollToComponent from 'react-scroll-to-component';
import Career from "./Components/Career";


class App extends Component {

  constructor(props) {
    super(props);
    this.handleToggleVisib = this.handleToggleVisib.bind(this);
    this.state = {
      visib: "closed" 
    };
  }



  handleToggleVisib(){
    if (this.state.visib === "") {
      this.setState({ visib : "open" });
    } else {
      this.setState({ visib : "" });

    }
}

  render() {
    

    return (
      <div className="App">
        <nav id="drawer" className="nav-bar">
          <ul className={`nav-list ${this.state.visib}`}>

            <li className="nav__item">
              <Link
                to="/home"
                onClick={() => scrollToComponent(this.Home, { offset: -100, align: 'top', duration: 1000, ease:'inCube'})}
              >
                Home
              </Link></li>
            <li className="nav__item">
              <Link
                to="/aboutme"
                onClick={() => scrollToComponent(this.AboutMe, { offset: -80, align: 'top', duration: 1000, ease:'inCube'})}
              >
                About me
              </Link></li>
            <li className="nav__item">
              <Link
              to="/githublinks"
                onClick={() => scrollToComponent(this.GithubLinks, { offset: -75, align: 'top', duration: 1000, ease:'inCube'})}
              >
                Projects
              </Link></li>
            <li className="nav__item">
              <Link 
              to="/career"
              onClick={() => scrollToComponent(this.Career, { offset: -75, align: 'top', duration: 1000, ease:'inCube'})}
              >Career
              </Link></li>
            <li className="nav__item">
              <Link 
              to="/contact"
              onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1000, ease:'inCube'})}
              >Contact</Link></li>
          </ul>
        </nav>

        <a id="menu" className="header-menu" onClick={this.handleToggleVisib}>
          <img src="./burger.png" alt="burger menu" />
        </a> 

        {/* <Route exact path="/home" render={() => <Home />} /> */}
        <section ref={(section) => { this.Home = section; }}><Home/></section>
        <section ref={(section) => { this.AboutMe = section; }}><AboutMe/></section>
        <section ref={(section) => { this.GithubLinks = section; }}><GithubLinks/></section>
        <section ref={(section) => { this.Career = section; }}><Career /></section>
        <section ref={(section) => { this.Contact = section; }}><Contact/></section>
        
      </div>
    );
  }
}

export default App;
