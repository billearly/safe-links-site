import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  border-radius: 0.25rem;
  box-shadow: #00000054 0px 0.06em 0.75em;
  padding: 1.25rem;
  width: 20rem;
`;

export const SearchInput = ({
  value,
  handleChange,
  placeholder
}) => {
  return (
    <StyledInput
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
