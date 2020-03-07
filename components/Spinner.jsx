import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const StyledSpinner = styled.div`
  animation: ${rotate} 1s linear infinite;
  border: 0.2rem solid lightgray;
  border-top-color: darkgray;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
`;

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinner />
    </SpinnerWrapper>
  );
}
