import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 300px;
 
`;

export const Content = styled.div`
 @media (max-width: 1023px) {
    order: 1;
    flex-direction: column;
  }
`;

export const Content2 = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    width: auto;
    margin-top: -200px;
    text-align: center;
    padding-right: 10px;
    
  }
`;


export const Title = styled.text`
  font-size: 36px;
  font-weight: bold;
`;

export const ContentText = styled.div`
    font-size: 24px;
    line-height: 36px;
    margin: 40px 0;
`;

export const ContentImage = styled.div`
    
    border-radius: 16px;
    width: 467px;
    height: 810px;
    @media (max-width: 700px) {
      width: auto;
  }
  
`;

export const Image = styled.img`
   width: 100%;
   border-radius: 16px;
 
   transition: 1s;
   cursor: pointer;

  @media (max-width: 700px) {
    width: 70%;
   margin-top: 190px;
   padding-right: 10px;
  }
`;


