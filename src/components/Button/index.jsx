import React from 'react';

import { Container, ContentButton, Icon, Text } from './styles';

function Button({text, icon, link}) {
  return (
    <Container>
        <ContentButton to={link}>
            <Icon src={icon} />
            <Text>{text}</Text>
        </ContentButton>
    </Container>
  )
}

export default Button;