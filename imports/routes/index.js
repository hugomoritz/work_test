import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Route components
import List from "../ui/List.js";
import { Addinfo } from "../ui/Addinfo.js";

/*
Defining routing path for the components. 
*/
export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/addinfo" component={Addinfo} />
    </Switch>
  </Router>
);
