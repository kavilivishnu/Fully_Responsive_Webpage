import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li  {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translate(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li a {
            color: #fff;
            cursor: pointer;
        }
    }
`;

function RightNav({ open }) {
    return (
        <UL open={open}>
            <li><Link to="/Firstpage" style={{ textDecoration: 'none', color: 'dark-grey' }}>Home</Link></li>
            <li><Link to="/Secondpage" style={{ textDecoration: 'none', color: 'dark-grey' }}>Entry Details</Link></li>
            <li><Link to="/Thirdpage" style={{ textDecoration: 'none', color: 'dark-grey' }}>Exit</Link></li>
        </UL>
    );
}

export default RightNav;