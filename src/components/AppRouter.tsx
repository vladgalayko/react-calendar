import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Event from '../pages/Event';
import Login from '../pages/Login';
import { priviteRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
        ?
            <Routes>
                {priviteRoutes.map(route =>
                        <Route 
                        path={route.path} 
                        element={<Event/>}
                        key={route.path}/>
                    )}
            </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                        <Route 
                        path={route.path} 
                        element={<Login/>}
                        key={route.path}/>
                    )}
            </Routes>
        
    );
};

export default AppRouter;