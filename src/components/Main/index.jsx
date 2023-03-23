import React from 'react';

import { 
    Container, 
    TitleMain, 
    SubTitleMain, 
    Content, 
    Span, 
    ContentImage, 
    Image, 
    TextRedes, 
    Image2,
    ContentButtons,

} from './styles';
import Button from '../Button';

import image from "../../assets/me3.jpg"
import git from "../../assets/git.png"
import link from "../../assets/link.png"
import tw from "../../assets/tw.png"


function Main() {
    return (
        <Container>
            <Content>
                <TitleMain>
                    Eleve seu negócio digital<br /> a outro nível <Span>com um<br /> Front-end de qualidade!</Span>
                </TitleMain>
                <SubTitleMain>
                    Olá! Sou José Eduardo, desenvolvedor Front-end<br /> com especialidade em React, HTML e CSS. Ajudo<br /> pequenos negócios e designers a colocarem em<br /> prática boas ideias. Vamos conversar?
                </SubTitleMain>
                <TextRedes>
                    Acesse minhas redes:
                </TextRedes>
            <ContentButtons>
                <Button text="Github" icon={git} link="https://github.com/013Edu" />
                <Button text="Linkedin" icon={link} link="https://www.linkedin.com/in/eduardo-gon%C3%A7alves-993586224/" />
                <Button text="Twitch" icon={tw} link="https://www.twitch.tv/eduuukrl" />
            </ContentButtons>
            </Content>
            <ContentImage>
            <Image src={image} />
            </ContentImage>
        </Container>
    )
}

export default Main;
