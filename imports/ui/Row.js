import React, { Component } from "react";

// Row component - represent a "row" with information for one service with
// user and password. Returns a unordered list with list elements.
export default class Row extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.info.service}</li>
        <li>{this.props.info.user}</li>
        <li>{this.props.info.password}</li>
      </ul>
    );
  }
}
