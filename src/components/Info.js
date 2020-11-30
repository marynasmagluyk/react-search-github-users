import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
    const {gitHubUser} = React.useContext(GithubContext);
    const {public_repos, followers, following, public_gists} = gitHubUser;

    const items = [
        {
            id: 1,
            label: 'repos',
            icon: <GoRepo className='icon'/>,
            value: public_repos,
            color: 'pink',
        },
        {
            id: 2,
            label: 'followers',
            icon: <FiUsers className='icon'/>,
            value: following,
            color: 'purple',
        },
        {
            id: 3,
            label: 'following',
            icon: <FiUserPlus className='icon'/>,
            value: followers,
            color: 'green',
        },
        {
            id: 4,
            label: 'gists',
            icon: <GoGist className='icon'/>,
            value: public_gists,
            color: 'yellow',
        },
    ];

    return <section className='section'>
        <Wrapper className='section-center'>

        </Wrapper>
    </section>
};

export default UserInfo;