import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navigation() {
  const dFlex = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  const bgColor = {
    background: 'linear-gradient(45deg, #fd645a, #cef934)',
  };
  return (
    <nav style={(dFlex, bgColor)}>
      <img src={logo} alt='logo' />
      <Link to='/Login'>로그인</Link>
    </nav>
  );
}

export default Navigation;
