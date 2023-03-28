import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/signup">Sign up</Link>
      <span> | </span>
      <Link to="/signin">Sign in</Link>
    </div>
  );
}

export default Header;
