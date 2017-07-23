import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
  return (
    <ul className='main-navigation'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/roster'>
          Roster
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/schedule'>
          Schedule
        </NavLink>
      </li>
    </ul>
  )
}
 export default Nav;
