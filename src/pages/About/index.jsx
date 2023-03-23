import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container, Content, Title, ContentText, ContentImage, Image, Content2 } from './styles';

import image from "../../assets/me2.jpg"

function About() {
    return (
        <>
            <Container>
                <Header />
               <Content2>
               <Content>
                    <Title>
                        Sobre mim
                    </Title>
                    <ContentText>
                    Eu sou um profissional graduando em Análise<br /> e Desenvolvimento de Sistemas, especializado em<br /> desenvolvimento Front-end e aplicações voltadas<br /> para a interface do usuário. Meu objetivo é encontrar<br /> as melhores soluções criativas para as marcas dos meus<br /> clientes, cuidando de cada detalhe e buscando sempre<br /> um impacto positivo na experiência do usuário.

Tenho<br /> um forte comprometimento com o código que eu produzo,<br /> deixando-o sempre limpo e conciso, o que contribui para uma<br /> maior produtividade no trabalho. Sou especialista em HTML, CSS,<br /> Javascript, Typescript, React, React Native, Next Js, Styled<br /> Components, Tailwind e versionamento de códigos usando<br /> git e github.

Se você procura um profissional para colaborar<br /> em projetos de Front-end, estou sempre disponível para discutir<br /> possibilidades. Basta entrar em contato comigo pelo e-mail<br /> sobral.je81@gmail.com e conversarmos sobre como posso ajudar<br /> a impulsionar o sucesso de seu projeto.
                    </ContentText>
                </Content>
                <ContentImage>
            <Image src={image} />
            </ContentImage>
        
               </Content2>
            </Container>
            <Footer />
        </>
    )
}

export default About;