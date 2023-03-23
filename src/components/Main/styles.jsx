import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 64px;
  padding-bottom: 100px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }

 
  
`;

export const TitleMain = styled.text`
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 56px;
  color: #f6f6f6;
`;

export const SubTitleMain = styled.text`
  color: #f6f6f6;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 36px;
  margin: 40px 0;
`;

export const Span = styled.text`
  color: #22D4FD;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: 1023px) {
    order: 1;
  }
  @media (max-width: 700px) {
    width: auto;
    margin-top: -200px;
    text-align: center;
    padding: 0 10px;
    
  }
`;

export const ContentImage = styled.div`
    
    border-radius: 16px;
    width: 467px;
    height: 810px;
    @media (max-width: 700px) {

  }
  
`;

export const Image = styled.img`
   width: 100%;
   border-radius: 16px;
 
   transition: 1s;
   cursor: pointer;
  :hover {
    -webkit-box-shadow: 10px 10px 10px 10px #22D4FD;
-moz-box-shadow: 10px 10px 10px 10px #22D4FD;
box-shadow: 0px -10px 34px 0px #22D4FD;
transition: 1s;
  }

  @media (max-width: 700px) {
    width: 70%;
    margin-left: 70px;
  }
`;

export const Image2 = styled.div`
   width: 488px;
   height: 650px;
   border-radius: 16px;
`;


export const TextRedes = styled.text`
   font-size: 1.5rem;
   font-weight: bold;
   color: #f6f6f6;
   text-align: center;
`;

export const ContentButtons = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 32px 0;
   width: 100%;
`;


