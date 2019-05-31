import styled from 'styled-components';

export const StyledLink = styled.a`
  color: #4c4c4c;
`;

export const Link = ({
  href,
  isExternal,
  children
}) => {
  return (
    <StyledLink
      href={href}
      target={isExternal && '_blank'}
      rel={isExternal && 'noopener noreferrer'}
    >
      {children}
    </StyledLink>
  );
}
