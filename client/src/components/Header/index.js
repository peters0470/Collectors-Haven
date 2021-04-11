import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Auth from '../../utils/auth';

const NavTitle = styled.h1`
  margin: 0;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: #f1fffc;
  color: black;
  font-family: 'Quicksand', sans-serif;
  :hover {
    background-color: #e01d61;
  }
`;

const Nav = () => {
<<<<<<< HEAD
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
=======

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

    return (
        <header>
          <NavTitle>
            Collectors Haven
          </NavTitle>

          <nav style={{ fontFamily: 'QuickSand' }}>
            <ul className='nav-list'>
              <li className=''>
                <Link to='/' className='nav-elements'>
                  Home
                </Link>
              </li>
              <li>
                {Auth.loggedIn() ? (
                  <>
               <Link to='/' className='nav-elements' onClick={logout}>
                    Logout
               </Link>
                 <Link to='/collection' className='nav-elements'>
                  Collection
                </Link>
                </>
                ) : (
                  <>
                <Link to='/login' className='nav-elements'>
                  Log In
                </Link>
                </>
                
                )}
                </li>
              
              <li>
                
              </li>
            </ul>
          </nav>
        </header>
    );
>>>>>>> 70f452808c30376edfc3b486fbac066f04189999
};

export default Nav