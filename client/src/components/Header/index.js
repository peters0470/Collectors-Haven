import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
          <h1>
            Collectors Haven
          </h1>

          <nav>
            <ul>
              <li className='nav-elements'>
                <Link to='/' className='link font-color'>
                  Home
                </Link>
              </li>
              <li className='nav-elements'>
                <Link to='/login' className='link font-color'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to='/collection'>
                  Collection
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Nav