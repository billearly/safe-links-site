import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  bottom: 0;
  position: absolute;
  transform: translateY(50%);
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
