import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <NavLink className='nav-link' to="/">
        <img src={logo} alt="Logo" style={{ height: "150px" }} />           
      </NavLink>
      <div>
        <h1 className='header-title'>The Journalist's Guide To Inaccuracy</h1>
        <nav>
          <ul className='header-nav'>
            <li>
              <NavLink
                className='nav-link'
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to="/news-feed">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to="/image">
                Images
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to="/generate-article">
                Generate Article
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
