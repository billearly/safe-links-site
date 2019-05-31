import styled from 'styled-components';

export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  height: 8rem;
  justify-content: center;
  padding: 1rem;
  text-align: center;

  &:hover {
    box-shadow: #00000026 0px 0.06em 0.75em;
  }
`;
