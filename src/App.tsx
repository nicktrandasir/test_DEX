import React from "react";
import { SignIn } from "./pages/signIn/signIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp } from "./pages/signUp/signUp";
import { pathRouts, PrivateRoute, routes } from "./pages/routes";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path={pathRouts.SignIn} component={SignIn} />
        <Route exact path={pathRouts.SignUp} component={SignUp} />
        {routes.map((route, index: number) => (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </Router>
  );
};
