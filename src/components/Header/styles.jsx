import styled from 'styled-components';

import { Link } from "react-router-dom"

export const Container = styled.div`
  padding: 60px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;
 
`;

export const Title = styled(Link)`
  text-decoration: none;
  margin: 0 80px;
  color: #22D4FD;
  font-size: 1.5rem;

  :hover {
    color: #fff;
  }

  @media (max-width: 700px) {
   font-size: 1.3rem;
  }
`;
