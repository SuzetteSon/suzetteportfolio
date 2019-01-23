import React, { Component } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe.jsx";
import GithubLinks from "./Components/GithubLinks.jsx";
import { Route } from "react-router-dom";
import Home from "./Components/Home.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/home" render={() => (<Home />)} />
       
        <AboutMe id="aboutme" />

        <GithubLinks id="github" />
       
      </div>
    );
  }
}

export default App;
