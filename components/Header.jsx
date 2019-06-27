import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  align-items: center;
  background-image: radial-gradient(#6bbce1 25%, #3ea2d0 80%);
  color: white;
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: center;

  & p {
    font-size: 1.2rem;
    margin-top:  1rem;
  }
`;

const Title = styled.h1`
  font-family: 'Rancho', cursive;
  font-size: 7rem;
  font-weight: normal;
  margin: 0;
`;

export const Header = ({ title, children }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {children}
    </HeaderContainer>
  );
}
