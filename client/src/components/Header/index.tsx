import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>쓰담쓰담</Link>
      <div></div>
    </HeaderContainer>
  );
}
