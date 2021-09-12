import React from "react";
import { NotFound } from "./notFound/notFound";
import { DetailsPlayer } from "./detailsPlayer/detailsPlayer";
import { DetailsTeam } from "./detailsTeam/detailsTeam";
import { AddUpdatePlayer } from "./addUpdatePlayer/addUpdatePlayer";
import { AddUpdateTeam } from "./addUpdateTeam/addUpdateTeam";
import { CardPlayers } from "./cardPlayers/cardPlayers";
import { CardTeams } from "./cardTeams/cardTeams";
import { useSelector } from "react-redux";
import { AppStateType } from "../core/redux/rootReducer";
import { Route, useHistory } from "react-router-dom";

export const PrivateRoute = ({ component, ...props }: any) => {
  const history = useHistory();
  const { isAuth } = useSelector((state: AppStateType) => state.auth);
  const finalComponent = isAuth ? component : history.push(pathRouts.SignIn);
  return <Route {...props} component={finalComponent} />;
};

export const pathRouts = {
  Teams: "/teams",
  Players: "/players",
  AddUpdateTeam: "/add_update_team/",
  AddUpdatePlayer: "/add_update_player/",
  DetailsTeam: "/details_team/",
  DetailsPlayer: "/details_player/",
  NotFound: "*",
  SignIn: "/sign_in",
  SignUp: "/sign_up",
};

export const routes = [
  {
    path: pathRouts.Teams,
    exact: true,
    main: () => <CardTeams />,
  },
  {
    path: pathRouts.Players,
    exact: true,
    main: () => <CardPlayers />,
  },
  {
    path: pathRouts.AddUpdateTeam,
    exact: true,
    main: () => <AddUpdateTeam />,
  },
  {
    path: pathRouts.AddUpdateTeam + ":teamId",
    exact: true,
    main: () => <AddUpdateTeam />,
  },
  {
    path: pathRouts.AddUpdatePlayer,
    exact: true,
    main: () => <AddUpdatePlayer />,
  },
  {
    path: pathRouts.AddUpdatePlayer + ":playerId",
    exact: true,
    main: () => <AddUpdatePlayer />,
  },
  {
    path: pathRouts.DetailsTeam + ":teamId",
    exact: true,
    main: () => <DetailsTeam />,
  },
  {
    path: pathRouts.DetailsPlayer + ":playerId",
    exact: true,
    main: () => <DetailsPlayer />,
  },
  {
    path: pathRouts.NotFound,
    main: () => <NotFound />,
  },
];
