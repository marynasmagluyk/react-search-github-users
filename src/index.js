import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker'
import {GithubProvider} from './context/context';
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.render(
    <Auth0Provider
        domain="dev-c53j40bj.us.auth0.com"
        clientId="BT9OEVfw1V4CuiddpehNHv2cA1KPU3I4"
        redirectUri={window.location.origin}
    >
        <React.StrictMode>
            <GithubProvider>
                <App/>
            </GithubProvider>
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
);
