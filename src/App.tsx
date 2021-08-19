import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./pages/routes";

function App() {
  return (
    <div>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
