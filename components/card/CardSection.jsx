import styled from 'styled-components';

export const CardSection = styled.section`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  margin: 0 auto;
`;
