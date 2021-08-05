import React from 'react';
import SignIn from "./login/signIn";
import SignUp from "./login/signUp";
import NotFound from "./notFound/notFound";

export const routes = [
    {
        path: "/signIn",
        exact: true,
        main: () => <SignIn/>
    },
    {
        path: "/signUp",
        exact: true,
        main: () => <SignUp/>
    },
    {
        path: "*",
        main: () => <NotFound/>
    }
]
