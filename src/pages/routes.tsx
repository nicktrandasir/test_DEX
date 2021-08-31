import React from "react";
import { SignIn } from "./signIn/signIn";
import { NotFound } from "./notFound/notFound";
import { DetailsPlayer } from "./detailsPlayer/detailsPlayer";
import { DetailsTeam } from "./detailsTeam/detailsTeam";
import { AddUpdatePlayer } from "./addUpdatePlayer/addUpdatePlayer";
import { AddUpdateTeam } from "./addUpdateTeam/addUpdateTeam";
import { CardPlayers } from "./cardPlayers/cardPlayers";
import { CardTeams } from "./cardTeams/cardTeams";
import { useSelector } from "react-redux";
import { AppStateType } from "../core/redux/rootReducer";
import { Route } from "react-router-dom";

export const PrivateRoute = ({ component, ...props }: any) => {
  const { isAuth } = useSelector((state: AppStateType) => state.auth);

  const finalComponent = isAuth ? component : SignIn;
  return <Route {...props} component={finalComponent} />;
};



export const routes = [

  {
    path: "/teams",
    exact: true,
    main: () => <CardTeams />,
  },
  {
    path: "/players",
    exact: true,
    main: () => <CardPlayers />,
  },
  {
    path: "/addUpdateTeam",
    exact: true,
    main: () => <AddUpdateTeam />,
  },
  {
    path: "/addUpdatePlayer",
    exact: true,
    main: () => <AddUpdatePlayer />,
  },
  {
    path: "/detailsTeam/:teamID",
    exact: true,
    main: () => <DetailsTeam />,
  },
  {
    path: "/detailsPlayer/:playerID",
    exact: true,
    main: () => <DetailsPlayer />,
  },
  {
    path: "*",
    main: () => <NotFound />,
  },
];
