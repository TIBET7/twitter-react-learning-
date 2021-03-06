import React from 'react';

import '../app-header/app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'purple' : 'black'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: gray;
        :hover {
            color: red;
        }
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as="section" colored>
            <h1>Dmitriy Zhukov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
};

export default AppHeader;