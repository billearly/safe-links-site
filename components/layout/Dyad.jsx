import styled from "styled-components";

const DyadWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 55rem) {
    flex-direction: column;
  }
`;

const DyadChild = styled.div`
  max-width: 30rem;
  padding: 0 2rem;
`;

export const Dyad = ({ children }) => {
  return (
    <DyadWrapper>
      <DyadChild>
        {children[0]}
      </DyadChild>

      <DyadChild>
        {children[1]}
      </DyadChild>
    </DyadWrapper>
  );
}