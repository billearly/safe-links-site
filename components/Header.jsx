import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #6bbce1;
  color: white;
  display: flex;
  height: 20rem;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-family: 'Sacramento', cursive;
  font-size: 4rem;
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
