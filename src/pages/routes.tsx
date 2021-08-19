import React from 'react';
import {SignIn} from "./login/signIn/signIn";
import {SignUp} from "./login/signUp/signUp";
import {Teams} from './teams/teams';
import {NotFound} from "./notFound/notFound";
import {Players} from './players/players';
import {DetailsPlayer} from "./players/detailsPlayer/detailsPlayer";
import {DetailsTeam} from './teams/detailsTeam/detailsTeam';
import { AddUpdatePlayer } from './players/addUpdatePlayer/addUpdatePlayer';
import { AddUpdateTeam } from './teams/addUpdateTeam/addUpdateTeam';


export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <SignIn/>
    },
    {
        path: "/teams",
        exact: true,
        main: () => <Teams/>
    },
    {
        path: "/players",
        exact: true,
        main: () => <Players/>
    },
    {
        path: "/addUpdateTeam",
        exact: true,
        main: () => <AddUpdateTeam/>
    },
    {
        path: "/addUpdatePlayer",
        exact: true,
        main: () => <AddUpdatePlayer/>
    },
    {
        path: "/detailsTeam/" + ":teamID",
        exact: true,
        main: () => <DetailsTeam/>
    },
    {
        path: "/detailsPlayer/" + ":playerID",
        exact: true,
        main: () => <DetailsPlayer/>
    },
    {
        path: "/signIn",
        main: () => <SignIn/>
    },
    {
        path: "/signUp",
        main: () => <SignUp/>
    },
    {
        path: "*",
        main: () => <NotFound/>
    }
]
