import React from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

const SearchResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

const StyledSearchResult = styled.div`
  text-align: center;
`;

export const SearchResult = ({
  isSearching,
  redirectLocation,
  defaultCopy
}) => {
  return (
    <SearchResultContainer>
      {isSearching &&
        <Spinner />
      }

      {!isSearching && redirectLocation &&
        <StyledSearchResult>
          {redirectLocation}
        </StyledSearchResult>
      }
    </SearchResultContainer>
  );
}
