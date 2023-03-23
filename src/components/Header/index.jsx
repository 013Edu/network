import React from 'react';
import { Container, Title } from './styles';

function Header() {
  return (
    <Container>
        <Title to="/">Home</Title>
        <Title to="/about">Sobre </Title>
    </Container>
  )
}

export default Header;