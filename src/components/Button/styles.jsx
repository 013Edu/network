import styled from 'styled-components';

import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentButton = styled(Link)`
   border: 3px solid #22D4FD;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   width: 50%;
   margin-top: 32px;
   text-decoration: none;
   cursor: pointer;

   :hover {
    background-color: #22d5fd1a;
   }
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Text = styled.text`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 16px;
`;
