// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './../styles/Header.css';

const Header = (props) => {
  return (
    <header>
      <section className="header-left">
        <h1>Birthday Deets</h1>
      </section>
      <section className="header-right">
        <nav>  
          <ul>
            <li>Friends</li>
            <li>Me</li>
            <li>Logout</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
