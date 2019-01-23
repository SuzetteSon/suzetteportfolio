import React, { Component } from "react";

class LoadingSpinner extends Component {
  render() {
    return (

      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
    );
  }
}

export default LoadingSpinner;