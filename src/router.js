import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "./config/routes";
import Menu from "./components/layout/menu";
import history from "./history";
import { PermissionsProvider } from "@tshio/react-router-permissions";

function RouterComponent() {
  return (
    <Router history={history}>
        <Switch>
          <Menu />
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} exact />
          ))}
        </Switch>
    </Router>
  );
}

export default RouterComponent;
