import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import { render } from "react-dom";
import { Link } from "react-router-dom";

//Components
import { Addinfo } from "./Addinfo.js";
import { Info } from "../api/StoreInfo.js";
import Row from "./Row.js";

//List component
export class List extends Component {
  /*
    Returns the tables from the database in Row component form.
  */
  renderInfo() {
    return this.props.info.map(info => <Row key={info._id} info={info} />);
  }

  /*
  Renders a table with explanation headers, add button and the information
  from the database.
  */
  render() {
    return (
      <div className="container">
        <div className="sticky">
          <div className="top-div">
            <div className="button-div">
              <Link to="/addinfo">
                <button>+</button>
              </Link>
            </div>
            <div className="top-div-h1">
              <h1>Lösenordslista</h1>
            </div>
          </div>
          <div className="category-div">
            <h3>Tjänst</h3>
            <h3>Användare</h3>
            <h3>Lösenord</h3>
          </div>
        </div>
        <div className="list-ul">
          <div>{this.renderInfo()}</div>
        </div>
      </div>
    );
  }
}

/*
Fetching data from the database.
*/
export default withTracker(() => {
  return {
    info: Info.find({}).fetch()
  };
})(List);
