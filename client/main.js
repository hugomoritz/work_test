import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
//Route rendering
import { renderRoutes } from "../imports/routes/index.js";

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("render-target"));
});
