import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import routes from "./config/routes";
import history from "./history";
import Menu from "./components/layout/menu";
import { hasAnyRole, isLoggedIn } from "~/hooks/useRole";

function RouterComponent() {
  
  const isAuthorized = (roles) => {
    if (roles) return isLoggedIn() && hasAnyRole(roles);
    return true;
  };

  return (
    <Router history={history}>
      <React.Fragment>
        <Menu />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={(props) =>
                isAuthorized(route.roles) ? (
                  <route.component {...props} />
                ) : (
                  <Redirect
                    to={{ pathname: "/", state: { from: props.location } }}
                  />
                )
              }
              exact
            />
          ))}
        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default RouterComponent;
