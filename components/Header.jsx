import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: center;

  & p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  @media (max-width: 55rem) {
    text-align: center;

    & p {
      font-size: 1rem;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Rancho', cursive;
  font-size: 7rem;
  font-weight: normal;
  margin: 0;

  @media (max-width: 55rem) {
    font-size: 5rem;
  }
`;

export const Header = ({ title, children }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {children}
    </HeaderContainer>
  );
}
