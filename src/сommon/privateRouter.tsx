import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { AppStateType } from "../core/redux/rootReducer";

interface PrivateRouteInterface {
  children: any;
}

export const PrivateRoute: React.FC<PrivateRouteInterface> = ({
  children,
  ...rest
}) => {
  const { isAuth } = useSelector((state: AppStateType) => state.auth);
  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to={"/signIn"} />)}
    />
  );
};