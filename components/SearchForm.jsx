import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
`;

export const SearchForm = ({
  handleSubmit,
  children
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  );
}
