import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Link } from "react-router-dom";

//Components
import { Info } from "../api/StoreInfo.js";
import Row from "./Row.js";
import List from "./List.js";

//Addinfo component
export class Addinfo extends Component {
  /*
  Handling the saved new info and inserting it to the database. Then "redirect"
  to List component.
  */
  handleSubmit(event) {
    event.preventDefault();
    var service = event.target.service.value;
    var user = event.target.user.value;
    var password = event.target.password.value;
    Meteor.call("info.insert", service, user, password);
    event.target.service.value = "";
    event.target.user.value = "";
    event.target.password.value = "";
    this.props.history.push({
      pathname: "/"
    });
  }

  /*
  Renders a form to add new information and save button.
  */
  render() {
    return (
      <div className="new-service">
        <div className="top-div">
          <h1>Nytt lösenord</h1>
        </div>
        <form className="service-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <h3>Tjänst</h3>
          </label>{" "}
          <input type="text" name="service" />
          <label>
            <h3>Användarnamn</h3>
          </label>{" "}
          <input type="text" name="user" />
          <label>
            <h3>Lösenord</h3>
          </label>
          <input type="password" name="password" />
          <button type="submit" name="submit">
            Spara
          </button>
        </form>
      </div>
    );
  }
}
