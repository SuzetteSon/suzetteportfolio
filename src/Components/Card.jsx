import React, { Component } from "react";

class Card extends Component {
  formatDate(date) {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + dt;
  }

  render() {
    return (
      <div className="results-wrapper">
        <ul className="results-list">
          {this.props.hits.map(article => (
            <li key={Math.random()}>
              <span className="left">Title: </span>
              <span className="right">{article.title}</span>
              <br />
              <span className="left">Author: </span>
              <span className="right">{article.author}</span>
              <br />
              <span className="left">Date created: </span>
              <span className="right">
                {this.formatDate(article.created_at)}
              </span>
              <br />
              <a className="left" href={article.url}>click here for article</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
