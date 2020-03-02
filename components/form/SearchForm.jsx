import React from 'react';

export const SearchForm = ({
  handleSubmit,
  children
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
