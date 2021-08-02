import React from 'react';
import SignIn from "./../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp";
import TeamsContainer from '../Pages/Teams/TeamsContainer';
import NotFound from "../Pages/NotFound/NotFound";
import PlayersContainer from '../Pages/Players/PlayersContainer';
import DetailsTeam from '../Pages/Teams/detailsTeam';


export const routes = [
    {
        path: "/teams",
        exact: true,
        main: () => <TeamsContainer/>
    },
    {
        path: "/players",
        exact: true,
        main: () => <PlayersContainer/>
    },
    {
        path: "/detailsTeam",
        exact: true,
        main: () => <DetailsTeam/>
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
