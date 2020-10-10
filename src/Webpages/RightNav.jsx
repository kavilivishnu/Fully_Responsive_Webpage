import React from 'react';
import styled from 'styled-components';

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

function RightNav ({ open }) {
    return (
        <UL open={open}>
          <li><a href="/Firstpage" style={{textDecoration: 'none', color: 'dark-grey'}}>Home</a></li>
          <li><a href="/Secondpage" style={{textDecoration: 'none', color: 'dark-grey'}}>Entry Details</a></li>
          <li><a href="/Thirdpage" style={{textDecoration: 'none', color: 'dark-grey'}}>Exit</a></li>
        </UL>
    );
}

export default RightNav;