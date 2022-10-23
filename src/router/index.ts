import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RoutNames {
    LOGIN = '/login',
    EVENT = '/',
    NAVIGATE = '*'
}

export const publicRoutes: IRoute[] = [
    {path: RoutNames.LOGIN, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RoutNames.EVENT, component: Event}
]