import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <nav className="nav">
    <Link to="/" className="logo">BookStore CMS</Link>
    <div className="link-cont">
      <Link to="/" className="link"> Home </Link>
      <Link to="/categories" className="link"> Categories </Link>
    </div>
    <Link to="/" className="user"><div className="user-container"><FontAwesomeIcon icon={faUser} /></div></Link>
  </nav>
);

export default Header;
