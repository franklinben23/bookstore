import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="nav">
    <div className="link-cont">
      <Link to="/"> Home </Link>
      <Link to="/categories"> Categories </Link>
    </div>
  </nav>
);

export default Header;
