import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 20rem;
  background-color: #6bbce1;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 4rem;
  font-family: 'Sacramento', cursive;
`;

export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}
