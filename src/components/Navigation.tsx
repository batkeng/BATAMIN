import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navigation() {
  return (
    <nav>
      <img src={logo} alt='logo' />
      <Link to='/Login'>로그인</Link>
    </nav>
  );
}

export default Navigation;
