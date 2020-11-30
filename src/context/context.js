import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {

    const [gitHubUser, setGitHubUser] = useState(mockUser);
    const [gitFollowers, setGitFollowers] = useState(mockFollowers);
    const [gitRepos, setGitRepos] = useState(mockRepos);

    return (
        <GithubContext.Provider>{{
            gitHubUser,
            gitRepos,
            gitFollowers,
        }}</GithubContext.Provider>
    )
};

export {GithubContext, GithubProvider}