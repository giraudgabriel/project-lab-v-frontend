import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "./config/routes";
import history from "./history";
import Menu from "./components/layout/menu";

function RouterComponent() {
  return (
    <Router history={history}>
      <React.Fragment>
        <Menu />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} exact />
          ))}
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default RouterComponent;
