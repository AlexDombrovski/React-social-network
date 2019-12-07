import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.css';

const AppHeader = () => {
  const [isOpen, menuToggle] = useState(false);
  const openMenu = () => {
    menuToggle(!isOpen);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Social Network</a>
        <button className="navbar-toggler" type="button" onClick={openMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar ${isOpen ? '' : 'navbar-menu'}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/albums" className="nav-link">Albums</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;