import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  background-color: #111;
  color: #fff;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
  font-family: 'Inter', sans-serif;

  &:hover {
    color: #ccc;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.2s;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    &:hover {
      color: #aaa;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavContainer>
        <Logo to="/">Hiro.exe</Logo>
        <NavLinks>
          <Link to="/#aboutMe">About</Link>
          <Link to="/#blog">Blog</Link>
          <Link to="/#works">Works</Link>
        </NavLinks>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
