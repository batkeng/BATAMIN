import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import userpic from '../assets/userpic.png';

const Nav = styled.nav`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: auto;
    height: auto;
    padding: 16px;
  }
  .icon {
    &--login {
      width: 32px;
      height: 32px;
      padding: 0;
    }
  }
`;
function Navigation() {
  return (
    <Nav>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <Link to='/Login'>
        <img className='icon--login' src={userpic} alt='user-icon' />
      </Link>
    </Nav>
  );
}

export default Navigation;
