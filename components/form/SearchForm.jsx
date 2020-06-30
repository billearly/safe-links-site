import React from 'react';
import "./SearchForm.scss";

export const SearchForm = ({
  handleSubmit,
  children
}) => {
  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
