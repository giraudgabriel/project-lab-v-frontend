import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "./config/routes";
import history from "./history";
import Menu from "./components/layout/menu";
// import { PermissionsProvider } from "@tshio/react-router-permissions";

function RouterComponent() {
  return (
    <>
      <Menu />
      <Router history={history}>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} exact />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default RouterComponent;
