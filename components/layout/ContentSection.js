import styled from 'styled-components';

export const ContentSection = styled.section`
  background-color: ${props => props.bgColor || 'white'};
  margin: 0 auto;
  padding: ${props => props.doublePadding ? '4rem' : '2rem'} 2rem;
  position: relative;
`;
