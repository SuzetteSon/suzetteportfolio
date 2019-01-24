import React, { Component } from "react";

class GithubLinks extends Component {
  render() {
    return (
      <div className="GithubLinks">
      <div className="links">
        <h2>Projects and links to Github</h2>
        <div className="links-wrapper">
          
          <div className="link">
            <span className="link-title">Student administrator</span>
            <br />
            <img src="./studentadmin.png" alt="screenshot of project" />
            <br />
            <span className="link-description"></span>
            <a href="https://salt-admin.herokuapp.com/">view app via heroku</a>
            <br />
          </div>
          <div className="link">
            <span className="link-title">Recipe Maker</span>
            <br />
            <img src="./recipemaker.png" alt="screenshot of project" />
            <br />
            <span className="link-description"></span>
            <a href="https://github.com/SuzetteSon/recipe-maker">
              view source code
            </a>
            <br />
          </div>
          <div className="link">
            <span className="link-title">Neighbourhood Maps</span>
            <br />
            <img src="./neigh.png" alt="screenshot of project" />
            <br />
            <span className="link-description">
              Final project for Udacity Google Front-end Developer Nanodegree. The instructions
              were as follows:
              <ol>
                <li>
                  Use React and Google Maps API
                </li>
                <li>
                  Write code required to display map markers identifying at
                  least 5 locations that you are interested in within this
                  neighborhood.
                </li>
                <li>
                  Implement a list view of the set of locations you have
                  defined.
                </li>
                <li>
                  Provide a filter option that uses an input field to filter
                  both: The list view & The map markers displayed by default on
                  load.
                </li>
                <li>
                  Add functionality using third-party APIs to provide
                  information when a map marker or list view entry is clicked
                </li>
                <li>
                  Be sure that all application components render on-screen in a
                  responsive manner.
                </li>
              </ol>
            <a href="https://github.com/SuzetteSon/fend-p8-neighborhood-map">
              view source code
            </a>
            </span>
            <br />
          </div>
        </div>
        <div>
          Others:
          <ul>
            <li>
              <a href="https://github.com/SuzetteSon/FizzBuzzKata">
                FizzBuzz Kata
              </a>
            </li>
            <li>
              <a href="https://github.com/SuzetteSon/Calculator-Kata">
                String Calculator Kata
              </a>
            </li>
            <li>
              <a href="https://github.com/SuzetteSon/Fetch-in-React">
                Fetch in React
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default GithubLinks;
