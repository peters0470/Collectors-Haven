import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = styled.h1`
  padding: 3px 10px;
  border-radius: 5px;
  background-color: #ff7171;
  color: #9fd8df;
  :hover {
    background-color: black;
  }
`;

const Nav = () => {
    return (
        <header>
          <NavTitle>
            Collectors Haven
          </NavTitle>

          <nav>
            <ul>
              <li className=''>
                <Link to='/' className='link nav-elements'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login' className='link nav-elements'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to='/collection' className='link nav-elements'>
                  Collection
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    );
};

export default Nav