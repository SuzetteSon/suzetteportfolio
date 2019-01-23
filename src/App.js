import React, { Component } from "react";
import Board from "./Components/Board.jsx";
import "./App.css";
import AboutMe from "./Components/AboutMe.jsx";
import GithubLinks from "./Components/GithubLinks.jsx";
import { HashLink as Link } from "react-router-hash-link";
import { Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import PropTypes from 'prop-types';

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
