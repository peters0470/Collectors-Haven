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
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Nav