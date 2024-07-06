import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader/MainHeader';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const HeaderContainer = styled.header`
`;

function Header() {
  return (
    <HeaderContainer>
      <MainHeader />
      <HeaderMenu />
    </HeaderContainer>
  );
}

export default Header;
