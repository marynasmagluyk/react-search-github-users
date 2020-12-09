import React, {useState, useEffect} from 'react';
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
    const [isLoading, setIsLoading] = useState(false);
    //error
    const [error, setError] = useState({show: false, msg: ''});

    const searchGithubUser = async (user) => {
        toggleError();
        setIsLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`)
            .catch(error => console.log(error));

        if (response) {
            setGitHubUser(response.data);
            console.log('user')
        } else {
            toggleError(true, 'there is no user with that username')
        }
        checkRequests();
        setIsLoading(false);
    };

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({data}) => {

            let {rate: {remaining}} = data;

            setRequests(remaining);

            if (remaining === 0) {
                toggleError(true, 'sorry you have exceeded your hourly rate limit')
            }
        })
            .catch((err) => console.log(err))
    };

    function toggleError(show = false, msg = '') {
        setError({show, msg})
    }

    useEffect(checkRequests, []);


    return (
        <GithubContext.Provider value={
            {
                gitHubUser,
                gitRepos,
                gitFollowers,
                requests,
                error,
                searchGithubUser,
                isLoading,
            }
        }>{children}</GithubContext.Provider>
    )
};

export {GithubContext, GithubProvider}