import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = () => {
    return (
        <h1>route</h1>
    );
};
export default PrivateRoute;