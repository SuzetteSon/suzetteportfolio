import React, { Component } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe.jsx";
import GithubLinks from "./Components/GithubLinks.jsx";
import Home from "./Components/Home.jsx";
import { HashLink as Link } from "react-router-hash-link";
import Contact from "./Components/Contact";
import scrollToComponent from 'react-scroll-to-component';
import Career from "./Components/Career";
import MetaTags from 'react-meta-tags';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleToggleVisib = this.handleToggleVisib.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

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
  closeMenu() {
    this.setState({visib: ""})
  }

  render() {
    return (
      <div className="App">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </MetaTags>
      <div className="container" >
        <nav id="drawer" className="nav-bar">
          <ul className={`nav-list ${this.state.visib}`}>

            <li className="nav__item">
              <Link
                to="/home"
                onClick={() =>  {
                  scrollToComponent(this.Home, { offset: -100, align: 'top', duration: 1000, ease:'inCube'});
                  this.closeMenu()
                  }}
              >
                Home
              </Link></li>
            <li className="nav__item">
              <Link
                to="/aboutme"
                onClick={() =>  {scrollToComponent(this.AboutMe, { offset: -80, align: 'top', duration: 1000, ease:'inCube'});
                this.closeMenu()
                }}
              >
                About me
              </Link></li>
            <li className="nav__item">
              <Link
              to="/githublinks"
                onClick={() => { scrollToComponent(this.GithubLinks, { offset: -75, align: 'top', duration: 1000, ease:'inCube'});
                this.closeMenu()
                }}
              >
                Projects
              </Link></li>
            <li className="nav__item">
              <Link 
              to="/career"
              onClick={() =>  { scrollToComponent(this.Career, { offset: -75, align: 'top', duration: 1000, ease:'inCube'});
              this.closeMenu()
              }}
              >Career
              </Link></li>
            <li className="nav__item">
              <Link 
              to="/contact"
              onClick={() =>  {scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1000, ease:'inCube'});
              this.closeMenu()}}
              >Contact</Link></li>
          </ul>
        </nav>

        <a id="menu" className="header-menu" onClick={this.handleToggleVisib}>
          <img src="./burger.png" alt="burger menu" />
        </a> 

        {/* <Route exact path="/home" render={() => <Home />} /> */}
        <section className="first" ref={(section) => { this.Home = section; }}><Home/></section>
        <section className="second" ref={(section) => { this.AboutMe = section; }}><AboutMe/></section>
        <section className="third" ref={(section) => { this.GithubLinks = section; }}><GithubLinks/></section>
        <section className="fourth" ref={(section) => { this.Career = section; }}><Career /></section>
        <section className="fivth" ref={(section) => { this.Contact = section; }}><Contact/></section>
        </div>
      </div>
    );
  }
}

export default App;
