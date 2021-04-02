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
    )
}

export default Nav