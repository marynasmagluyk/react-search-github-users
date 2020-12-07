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


    //git requests
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);


    const getRequest = () => {
        axios(`${rootUrl}/rate_limit`).then(({data}) => {

            let {rate: {remaining} } = data;

            setRequests(remaining);

            if(remaining === 0) {
                //throw an error
            }
        })
            .catch((err) => console.log(err))
    };

    useEffect(getRequest, []);


    return (
        <GithubContext.Provider value={
            {
                gitHubUser,
                gitRepos,
                gitFollowers,
                requests,
            }
        }>{children}</GithubContext.Provider>
    )
};

export {GithubContext, GithubProvider}