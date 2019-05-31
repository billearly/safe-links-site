import styled from 'styled-components';

export const ContentSection = styled.section`
  margin: 0 auto;
  max-width: 60rem;
  padding: ${props => props.doublePadding ? '4rem' : '2rem'} 2rem;
  position: relative;
`;
