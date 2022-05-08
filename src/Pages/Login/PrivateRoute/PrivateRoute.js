import React from 'react';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users } = useAuth();
    return (
        <Route
            {...rest}
        >

        </Route>
    );
};

export default PrivateRoute;