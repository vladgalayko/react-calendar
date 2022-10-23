import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RoutNames} from '../router';

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth

        ?<Routes>
            {privateRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.component/>}/>
            )}
            <Route path={RoutNames.NAVIGATE}  element={<Navigate replace to={RoutNames.EVENT}/>}/>
        </Routes>

        :<Routes>
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.component/>}/>
            )}
            <Route path={RoutNames.NAVIGATE}  element={<Navigate replace to={RoutNames.LOGIN}/>}/>
        </Routes>
        
    );
};

export default AppRouter;