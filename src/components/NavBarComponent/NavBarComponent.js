import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navBarStyle.module.css'

//Navigationskomponent som renderar en navbar med länkar på sidan.
class NavBarComponent extends Component {

  render() {
    return(
      <nav className={`nav justify-content-center align-items-center ${styles.navStyle}`}>
        <ul className="nav">
          <li className="nav-item">
            <NavLink
            exact to="/"
            className="nav-link"
            activeClassName="activatedLink">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
            to="/dashboard"
            className="nav-link"
            activeClassName="activatedLink">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
            to="/user"
            className="nav-link"
            activeClassName="activatedLink">User</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBarComponent;
