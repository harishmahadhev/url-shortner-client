import React from "react";
import { Route, Switch } from "react-router-dom";
import Charts from "./charts/Charts";
import DashHome from "./components/DashHome";
import Views from "./components/Views";

export default function DashRoutes() {
  return (
    <Switch>
      <Route exact path="/dash/home">
        <DashHome />
      </Route>
      <Route exact path="/dash/views">
        <Views />
      </Route>
      <Route exactpath="/dash/charts">
        <Charts />
      </Route>
    </Switch>
  );
}
